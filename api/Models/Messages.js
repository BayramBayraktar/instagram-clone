const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types



const MessageSchma = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    users: Array,
    sender: {
        type: ObjectId,
        required: true,
        ref: 'User',
    }
}, { timestamps: true })


module.exports = mongoose.model('messages', MessageSchma);
