const User = require("../models/userModel")

const signUp = async (req, res) => {
    try {
        const {username, email, password, dateOfBirth} = req.body
    if(!username){
        return res.status(400).send("Username cannot be empty")
    }

    if(!email){
        return res.status(400).send("Email cannot be empty")

    }

    if(password.length < 8 || password.length > 16){
        return res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
    }

    const newUser = await new User({
        username,
        email,
        password,
        dateOfBirth
    })

    res.status(200).send(newUser)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}

module.exports = signUp
