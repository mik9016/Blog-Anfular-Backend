const router = require('express').Router();
const myPosts = require('../models/NewPost');
const checkAuth = require('../middleware/check-auth');

router.get("/",async (req,res,next) => {
    
    try{
        const post = await myPosts.find();
        res.send(post)
    }catch{
        res.send("unable to connect to database");
    }
});

router.get("/:id",async (req,res,next)=>{
    const post = await myPosts.findById(req.params.id);
    res.send(post);
  
})

module.exports = router;