const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const battleRoutes = require("./routes/battle")
const cors = require('cors')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED")
})

app.use(cors())
app.use(bodyParser.json())
//My Routes
app.use("/api", battleRoutes)

const port = process.env.PORT


app.listen(port, () => { console.log("server is up and running") })