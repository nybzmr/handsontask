const express = require("express")
const seatRoutes = require("./routes/seatRoutes")

const app = express()

app.use(express.json())

app.use("/", seatRoutes)

const PORT = 3000

app.listen(PORT, () =>
{
    console.log("Server running on port " + PORT)
})
