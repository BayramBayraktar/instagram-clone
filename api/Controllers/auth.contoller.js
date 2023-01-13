const User = require('../Models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bayrambayraktar091@gmail.com",
        pass: "mysbfbaotmmgwkro"
    },
    tls: {
        rejectUnauthorized: false
    }
})

exports.Signup = async (req, res) => {

    const { fullName, emailOrNumber, userName, password } = req.body;

    User.findOne({
        emailOrNumber
    }).exec((err, User) => {
        if (User) {
            res.status(400).json({
                error: "there is this email please try something different"
            })
        }
    })


    User.findOne({
        userName
    }).exec((err, User) => {
        if (User) {
            res.status(400).json({
                error: "this username exists, please try something different"
            })
        }
    })

    //hasPass
    const salt = await bcrypt.genSalt(10)
    const hasPass = await bcrypt.hash(password, salt)

    //Generate Token
    const token = jwt.sign(
        {
            emailOrNumber,
            fullName,
            userName,
            password: hasPass
        },
        process.env.JWT_ACCOUNT_ACTIVATION,
        {
            expiresIn: '5m'
        }
    )

    //Nodemailer 
    var mailOptions = {
        from: ' "Verify your email" <bayrambayraktar091@gmail.com> ',
        to: emailOrNumber,
        subject: 'İnstagram - verify your email',
        html: `<h2> ${fullName}! thanks for registering on our site</h2>
                            <a href="${process.env.CLIENT_URL}/accounts/activate/${token}">Verify your email</a>
                    `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        }
        else {
            res.json({
                message: 'verfication email is sent to your gmail account'
            })
        }
    })
}

exports.ActivationController = async (req, res) => {

    const { token } = req.body



    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: 'Expired Token. Signup again'
                })
            } else {
                const { fullName, emailOrNumber, userName, password } = jwt.decode(token)


                const user = new User({
                    emailOrNumber,
                    fullName,
                    userName,
                    password
                })

                const savedUser = user.save()

                if (savedUser) {
                    return res.json({
                        success: true,
                        message: 'Signup success'
                    })
                } else {
                    return res.status(401).json({
                        error: "something went wrong"
                    })
                }

            }
        })

    } else {
        return res.json({
            message: "error happening plase try again "
        })
    }
}

exports.Login = async (req, res) => {

    const { userName, password } = req.body

    await User.findOne({ userName }).then((savedUser) => {
        if (!savedUser) {
            res.status(400).json({
                success: false,
                message: "The username you entered doesn't belong to an account. Please check your username and try again."
            })
        }

        //If registered user is found
        bcrypt.compare(password, savedUser.password)
            .then(positive => {
                if (positive) {
                    jwt.sign({ _id: savedUser._id }, process.env.JWTsign, ((err, token) => {
                        if (err) {
                            res.status(400).json({
                                success: false,
                                message: 'something went wrong',
                            })
                        }
                        if (token) {
                            res.cookie('account', token, { maxAge: 3600 * 1000, httpOnly: false }).status(200).json({
                                success: true
                            })
                        }
                    }))

                } else {
                    return res.status(400).json({
                        success: false,
                        message: "Sorry, your password was incorrect. Please double-check your password."
                    })
                }


            })


    })

}


exports.Logout = async (req, res) => {
    res.cookie('account', '', { maxAge: 0, httpOnly: false }).status(200).json({
        success: false
    })
}

