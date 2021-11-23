const db = require('../model');

const add = async (body) => {
    console.log('payload is', body);
    const roleRes = db.role.create(body);
    return roleRes;
};

module.exports = { add };
