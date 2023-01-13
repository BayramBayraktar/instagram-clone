const User = require('./user.model')
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types


const Post = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },
    photo: [
        { type: String, required: true }
    ],
    likes: [
        { type: ObjectId, ref: 'User' }
    ],
    comments: [{
        comment: String,
        CommentBy: {
            type: ObjectId,
            required: true,
            trim: true
        }
    }],
    postedBy: {
        type: ObjectId,
        ref: 'User'
    },
    postedByInfo: {
        type: Object,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Post', Post)