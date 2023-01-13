const router = require('express').Router();
const multer = require('multer')

const { verifyMiddleWare } = require('../Controllers/verify.controller')
const {
    Create,
    Follow,
    unFollow,
    like,
    unlike,
    save,
    unsave,
    AddMessage,
    Allmessages,
    notificationLike,
    allnotificationLike,
} = require('../Controllers/posts.controller.js')




//Storage Path
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Uploads/img')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
//Store - limit 
const Upload = multer({
    storage: Storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    },
});


router.post('/createpost', verifyMiddleWare, Upload.array('Photos'), Create)

//message
router.post('/addmessages', verifyMiddleWare, AddMessage)
router.post('/allmesages', verifyMiddleWare, Allmessages)


//Follow profile 
router.put('/follow', verifyMiddleWare, Follow);
router.put('/unfollow', verifyMiddleWare, unFollow);

//like or save post 
router.put('/post/like', verifyMiddleWare, like)
router.put('/post/unlike', verifyMiddleWare, unlike)
router.put('/post/save', verifyMiddleWare, save)
router.put('/post/unsave', verifyMiddleWare, unsave)

//notification

router.post('/notification/like', verifyMiddleWare, notificationLike)
router.get('/allnotification/like', verifyMiddleWare, allnotificationLike)




module.exports = router
