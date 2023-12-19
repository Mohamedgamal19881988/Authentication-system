const userModel = require('../schema/users.schema')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')



exports.register = async function (req, res) {
    try {
        let newUser = new userModel(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        newUser.password = hashedPassword
        let user = await newUser.save()
        return res.json({ message: "user registerd sucssfly", user: { name: user.name, email: user.email } })
        
    } catch (error) {
        return res.status(400).send({message:error})
        
    }

}

exports.login = async function (req, res) {
    try {

        let user = await userModel.findOne({email:req.body.email})
        if (!user){
            return res.status(401).send({ message: "Authntication failed .. invaled email" })

        }
        if (! await user.comparePassword (req.body.password) ){
            return res.status(402).send({ message: "Authntication failed .. invaled password" })
        }
        const token  = jwt.sign ({name:user.name , email:user.email , _id:user.id} , "hana")
        return res.json({ message: "user logedin sucssfly", user: { name: user.name, email: user.email , token:token} })


    } catch (err) {
        return res.status(400).send({ message: err })
    }
}