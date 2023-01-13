const router = require('express').Router();

const { verifyMiddleWare } = require('../Controllers/verify.controller')

const { FındeUserProfıle } = require('../Controllers/posts.controller')

const { Search, Getsubpost, Ifollow, fındeMessageUserId } = require('../Controllers/get.contoller')


//:profile search 
router.get('/user/:profile', verifyMiddleWare, FındeUserProfıle);
//find users
router.get('/search/:wantedUser', verifyMiddleWare, Search);
//User posts I'm interested in
router.get('/getsubpost', verifyMiddleWare, Getsubpost);
//users I follow
router.get('/follow', verifyMiddleWare, Ifollow)
router.get('/direct/t/:id', verifyMiddleWare, fındeMessageUserId)




module.exports = router

