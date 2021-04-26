const router = require('express').Router();

router.get("/myposts",async (req,res,next) => {
    try{
        res.send("connected with myposts")
    }catch{
        res.status(500).send("unable to connect to database");
    }
});

module.exports = router;