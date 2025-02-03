const express = require("express")
const app = express()
const router = require("./routes/userRoutes")

app.use(express.json())

app.use("/api", router)

app.listen(3000, async (req, res) => {
    try {
        console.log("Server listening on 3000")
    } catch(error) {
        console.log(error.message)
    }
})

