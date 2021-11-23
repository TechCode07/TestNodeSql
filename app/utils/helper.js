// Common helper functions here
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const createJWTToken = (object, expiry = '24h') => {
    return jwt.sign(object, process.env.ACCESS_SECRET_TOKEN, { 'expiresIn': expiry });
};

const HMAC = (input, secret) => {
    if(!input || !secret) return null;

    const hmac = crypto.createHmac('sha256', secret);
    hmac.write(input);
    return hmac.digest('hex');
};


module.exports = { createJWTToken, HMAC };
