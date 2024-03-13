const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const PORT = 5000;
const hbs = require("hbs")


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

app.use("/",require("./routes/guitar.js"))

mongoose.connect('mongodb://localhost:27017/guitarnew')
.then(()=>{
    app.listen(PORT, () => {
        console.log("http://localhost:" + PORT);
    })
})