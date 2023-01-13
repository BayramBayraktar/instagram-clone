const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const Notification = mongoose.Schema({
    from: {
        type: 'String',
        required: true,
    },
    to: {
        type: Object,
        required: true
    },
    type: {
        type: "String",
        required: true
    },
    desc: {
        type: "String",
        required: true
    },
    content: {
        type: "String",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Notification", Notification);
