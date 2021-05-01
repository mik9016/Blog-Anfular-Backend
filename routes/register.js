const router = require('express').Router();
const Register = require('../models/Register');

router.post('/',(req,res,next)=>{
    try{
        const register = new Register({
            name: req.body.userName,
            email:req.body.userEmail,
            password: req.body.userPassword,
          });
          console.log(register)
        res.send(register)
       

    }catch{
        res.status(500).send("unable to connect to database");
    }
})

module.exports = router;