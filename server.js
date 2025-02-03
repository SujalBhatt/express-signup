const express = require("express")
const connectDB = require("./config/db")
const app = express()
const router = require("./routes/userRoutes")

app.use(express.json())

app.use("/api", router)

app.listen(3000, async (req, res) => {
    try {
        await connectDB()
        console.log("Server listening on 3000")
    } catch(error) {
        console.log(error.message)
    }
})

