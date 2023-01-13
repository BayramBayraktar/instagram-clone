const jwt = require('jsonwebtoken');
const User = require('../Models/user.model')


exports.verifyMiddleWare = async (req, res, next) => {

    const token = req.cookies.account

    if (token) {
        jwt.verify(token, process.env.JWTsign, (err, response) => {
            if (err) {
                res.status(400).json({
                    success: false
                })
            }
            else {
                const { _id } = response
                User.findById({ _id }).then(user => {
                    req.user = user
                    next()
                })
            }
        })
    } else {
        res.status(400).json({
            success: false,
        })
    }
}

exports.LoggedInUser = async (req, res) => {

    if (req.user) {
        res.status(200).json({
            success: true,
            user: req.user
        })
    }
}