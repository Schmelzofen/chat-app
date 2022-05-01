const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const MessageSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        match: /^[a-zA-Z0-9]+$/,
        index: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: /^[a-zA-Z0-9]+$/,
        index: true,
    },
    password: String,
    conversationId: Array,
    friendsId: Array
});

MessageSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Message", MessageSchema);
