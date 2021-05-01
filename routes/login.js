const router = require('express').Router();
const Login = require('../models/Login');

router.post('/',(req,res,next)=>{
    try{
        const login = new Login({
            email: req.body.userEmail,
            password: req.body.userPassword,
          });
          console.log('req body: ' + req.body.userEmail, req.body.userPassword)
        res.send(login)
        console.log(login)

    }catch{
        res.status(500).send("unable to connect to database");
    }
})

module.exports = router;