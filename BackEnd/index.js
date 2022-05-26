const express = require('express')
const app = express()
const cors = require("cors");



app.use(express.json());
app.use(cors());



const db = require("./models")

//Routes
const stationsRouter = require("./routes/Stations")
app.use("/Stations", stationsRouter)

db.sequelize.sync().then(() => {

    app.listen(3001, () => {
        console.log("server is now running on port 3001")
    })

})

