const User = require('../Models/user.model')
const Post = require('../Models/post')

exports.Search = async (req, res) => {
    const regEx = new RegExp(req.params.wantedUser)

    await User.find({ userName: { $in: regEx } })
        .select("profilePicture userName  fullName")
        .then((response) => {
            if (response.length !== 0) {
                res.json(response)
            } else {
                res.json({
                    message: "no results found"
                })
            }
        })
}


exports.Getsubpost = async (req, res) => {

    await Post.find({ postedBy: { $in: req.user.followings } }).sort({
        createdAt: -1
    }).then((response) => {
        if (response.length) {
            res.json(response)
        } else {
            res.json({
                message: "Post not found, you need to find friends"
            })
        }
    })

}

exports.Ifollow = async (req, res) => {
    await User.find({ _id: { $in: req.user.followings } })
        .select([
            "fullName",
            "_id",
            "profilePicture"
        ]).then((response) => {
            if (response == '') {
                res.json({ message: 'You do not have any friends yet' })
            }
            res.status(200).json({ response })
        }).catch((err) => {
            res.status(400).json({ success: false })
        })
}

exports.fındeMessageUserId = async (req, res) => {
    await User.findOne({ _id: { $in: req.params.id } })
        .select([
            "fullName",
            "_id",
        ])
        .then((response) => {
            if (response) {
                res.json(response)
            } else {
                res.json({ success: false })
            }
        })
        .catch((err) => console.log(err))
}


