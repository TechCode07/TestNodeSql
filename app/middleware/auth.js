const jwt = require('jsonwebtoken');
const response = require('../handler/response');
const { logger } = require('../utils/logger');
const db = require('../model');

const verifyBearerToken = (req, res, next) => {
    // Get the token from the header if present
    let token = req.headers.authorization;
    // If no token found, return response (without going to the next middelware)
    if(!token) {
        return res.status(401).send(response.error(2999));
    }
    try {
        if(token.includes('Bearer')) {
            token = token.substr(7);
        }
        // If can verify the token, set req.user and pass to next middleware
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
        req.user = decoded;
        next();
    }
    catch(error) {
        logger.error(error);
        return res.status(401).send(response.error(2999));
    }
};

const isSuperAdmin = async (req, res, next) => {
    try {
        const user = await db.user.scope('withSecretColumns').findOne({ where: {'email': req.user.email } });
        if(!(user && user.role_id == 3)) {  //due to limited time - not creating a join query for getting role value as superAdmin 
            return res.status(401).send(response.error(2999));
        }
        next();
    }
    catch (err) {
        logger.error(err);
        return res.status(401).send(response.error(2999));
    }
}
module.exports = { verifyBearerToken, isSuperAdmin };
