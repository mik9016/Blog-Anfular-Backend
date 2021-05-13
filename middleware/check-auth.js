const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    //middleware veryfying token 
    try{
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'secret_this_should_be_longer');
        next();
    }catch{
        res.stats(401).json({message: "auth failed!"});
    }
    
    
}