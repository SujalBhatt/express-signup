const mongoose = require("mongoose")

const connectDB = async (req, res) => {
    try {
        await mongoose.connect("")
        console.log("Connected to MongoDB")
    } catch(error) {
        console.log(error.message)
    }
}

module.exports = connectDB