const { JWT_SECRET } = require("../config");
const jwt  =   require("jsonwebtoken");

const authMiddleware = (req , res , next) => {
    const authHeader = req.headers.authorization;
    if(typeof authHeader !== 'string' || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            message : "Unauthorized"
        })
    }
    const token = authHeader.split(" ")[1]; 

    try{
        const decoded = jwt.verify(token , JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch(err){ 
        return res.status(403).json({
            message : "Unauthorized"
        })
    }
};

module.exports = {authMiddleware};