const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 16
    },
    dateOfBirth: {
        type: Date
    }
})

module.exports = mongoose.model("User", userSchema)