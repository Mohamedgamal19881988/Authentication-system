const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routers/users.router')
// const userSchema = require ('./schema/users.schema')
const URL = "mongodb+srv://gemy:Hana%40sama279@gemy.e7pmhfw.mongodb.net/gemy?retryWrites=true&w=majority"
const app = express()
app.use(bodyParser.json())
app.use('/' ,userRouter)


const connectDB = () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(URL)
    console.log("Connected to Mongo DB");
} catch (error) {
    
}
}
connectDB()


app.use('/' ,userRouter)

app.listen(8000)
