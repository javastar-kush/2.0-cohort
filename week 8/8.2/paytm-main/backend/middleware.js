const jwt = require("jsonwebtoken");
const { JWT_Secret } =  require("./config")

const authMiddleware = (req, res, next)=> {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(411).json({
            message : "wrong token"
        })
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_Secret);

        req.userId = decoded.userId;
        next();
    }
    catch(err){
        return res.status(403).json({
            message : "dosen't verify"
        })
    }
}

module.exports = {authMiddleware};