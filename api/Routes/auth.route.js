const router = require('express').Router();

const {
    Signup,
    ActivationController,
    Login,
    Logout
} = require('../Controllers/auth.contoller')

const {
    verifyMiddleWare,
    LoggedInUser,
} = require('../Controllers/verify.controller')


router.post('/signup', Signup)
router.post('/activation', ActivationController)
router.post('/login', Login)
router.get('/logout', Logout)

//Verify
router.get('/verify', verifyMiddleWare, LoggedInUser)


module.exports = router
