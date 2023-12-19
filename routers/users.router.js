const express = require('express')
const router = express.Router()
const userControlers = require ('../controlers/users.controlers')

router.post('/api/register',userControlers.register)
router.post('/api/login',userControlers.login )


module.exports =router