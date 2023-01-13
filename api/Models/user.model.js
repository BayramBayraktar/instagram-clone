const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const UserSchma = new mongoose.Schema({

    emailOrNumber: {
        type: String,
        required: true,
        unique: true,
        lowarcase: true,
        trim: true
    },
    fullName: {
        type: String,
        trim: true,
    },
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "http://localhost:8000/nouser.jpg"
    },
    aboutBody: {
        type: Array,
    },
    aboutTitle: {
        type: String
    },
    followers: [{ type: ObjectId, ref: "User" }],
    followings: [{ type: ObjectId, ref: "User" }],
    saved: [{ type: ObjectId, ref: "User" }],
    role: {
        type: String,
        default: 'Normal'
    },
    resetPasswordLink: {
        type: String,
        default: ''
    }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchma)
