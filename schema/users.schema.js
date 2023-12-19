const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name:String,
    email:{type:String,unique:false},
    password:String
})
userSchema.methods.comparePassword = async function(userPassword){
    console.log(await bcrypt.compare (userPassword ,this.password))
    return await bcrypt.compare (userPassword ,this.password)
}

module.exports = mongoose.model('users',userSchema)