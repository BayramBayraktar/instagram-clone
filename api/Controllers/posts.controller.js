const User = require('../Models/user.model')
const Post = require('../Models/post')
const Messages = require('../Models/Messages')
const Notification = require('../Models/notification')


//create Post--------------------------
exports.Create = async (req, res) => {

    const PostContext = req.body.Post;
    const files = req.files
    const user = req.user

    const photos = []
    for (let i = 0; i < files.length; i++) {
        photos.push(files[i].filename)
    }


    const PostSchma = new Post({
        body: PostContext,
        photo: photos,
        postedBy: user._id,
        postedByInfo: {
            user: user.userName,
            profilePicture: user.profilePicture
        }
    })

    await PostSchma.save((err, result) => {
        if (err) {
            res.status(400).json({
                message: 'Post Failed'
            })
        }
        if (result) {
            res.json({
                message: 'Post successfully created',
                success: true
            })
        }
    })


}

//find user profile----------------------------
exports.FındeUserProfıle = async (req, res) => {

    await User.findOne({ userName: { $in: req.params.profile } }).then(user => {

        if (user) {
            Post.find({ postedBy: { $in: user._id } }).then(post => {

                if (req.params.profile == req.user.userName) {
                    res.json({
                        post: post,
                        profile: user,
                        success: true
                    })
                } else {
                    res.json({
                        post: post,
                        profile: user,
                        success: false
                    })
                }
            })
        } else {
            res.status(400).json({
                success: false
            })
        }
    })
}

//follow profile or unfollow----------
exports.Follow = async (req, res) => {

    await User.findByIdAndUpdate(req.body.id, {
        $push: { followers: req.user._id }
    }), {
        new: true
    }

    await User.findByIdAndUpdate(req.user._id, {
        $push: { followings: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return console.log(err)
        } else {
            return res.json(result)
        }
    })
}

exports.unFollow = async (req, res) => {

    await User.findByIdAndUpdate(req.body.id, {
        $pull: { followers: req.user._id }
    }), {
        new: true
    }

    await User.findByIdAndUpdate(req.user._id, {
        $pull: { followings: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return console.log(err)
        } else {
            return res.json(result)
        }
    })

}

//like or save and unlike or unsave---
exports.like = async (req, res) => {

    await Post.findByIdAndUpdate(req.body.id, {
        $push: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(result)
        }
    })
}

exports.unlike = async (req, res) => {
    await Post.findByIdAndUpdate(req.body.id, {
        $pull: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(result)
        }
    })

}

exports.save = async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, {
        $push: { saved: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(result)
        }
    })

}

exports.unsave = async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, {
        $pull: { saved: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(result)
        }
    })

}

//messages--------------------------------
exports.AddMessage = async (req, res) => {
    try {
        const { to, message } = req.body

        const current = req.user._id

        const from = current.toString()
        const To = to._id.toString()

        const data = await Messages({
            message: message,
            users: [from, To],
            sender: current
        })

        await data.save()

    } catch (error) {
        console.log(err)
    }
}


exports.Allmessages = async (req, res) => {

    const current = req.user._id
    const from = current.toString()
    const { to } = req.body
   
    const mesages = await Messages.find({
        users: {
            $all: [from, to]
        }
    }).sort({
        createdAt: 1
    })

    const result = mesages.map((msg) => {
        return {
            fromSelf: msg.sender.toString() === from,
            message: msg.message
        }
    })
    res.json(result)
}





//notification--------------------------------

//post request
exports.notificationLike = async (req, res) => {
    try {
        const { to, type, desc, content } = req.body

        const To = to.user

        const data = new Notification({
            from: To,
            to: {
                user: req.user.fullName,
                profilePicture: req.user.profilePicture
            },
            type: type,
            desc: desc,
            content: content
        })

        await data.save((err, data) => {
            if (data) {
                return res.json({ success: true })
            } else {
                return res.json({ success: false })
            }
        })

    } catch (error) {
        console.log(error)
    }
}

//get request
exports.allnotificationLike = async (req, res, next) => {
    try {

        //We remove the excess notifications from the database

        let notificationRemove = []

        await Notification.find({
            from: { $in: req.user.fullName }
        }).sort({
            createdAt: -1
        }).skip(3)
            .then((res) => {
                notificationRemove.push(...res)
            })


        if (notificationRemove.length) {
            notificationRemove.map((item) => {
                Notification.findOneAndDelete({
                    from: { $in: item.from }
                }).then(() => next)
            })
        }
        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        const Notifications = await Notification.find({
            from: { $in: req.user.fullName }
        }).sort({
            createdAt: -1
        })

        await res.json(Notifications)

    } catch (error) {
        console.log(error)
    }
}

