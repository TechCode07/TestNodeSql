const db = require('../model');
const response = require('../handler/response');
const { createJWTToken, HMAC } = require('../utils/helper');
const passwordHash = 'zSYBIA7WC2eQm645';

const signup = async (value, transaction) => {
    const user = await db.user.scope('withSecretColumns').findOne({ where: {'email': value.email } }, transaction);
    if(user) {
        throw response.createError(2000); // EMAIL_ALREADY_USED
    }
    const payload = value;
    payload.password = HMAC(value.password, passwordHash);
    payload.role_id = 1;
    console.log('payload is', payload);
    const userCreated = await db.user.create(payload, transaction);
    return userCreated;
};

const login = async (value) => {
    const user = await db.user.scope('withSecretColumns').findOne({ where: {'email': value.email } });
    if(!user) {
        throw response.createError(2001); // USER_NOT_FOUND
    }
    const hashedPassword = HMAC(value.password, passwordHash);
    if(hashedPassword !== user.dataValues.password) {
        throw response.createError(1003); // WRONG_PASSWORD
    }

    const token = createJWTToken({ 'userID': user.id, 'email': user.email });
    delete user.dataValues.password;
    delete user.dataValues.verifyToken;
    return { 'token': token };
};

const listAllUsers = async () => {
return await db.user.findAll({
        include: [{
            model: db.role,
            attributes: ['name']
        }],
        attributes: ['firstName', 'lastName', ['createdAt', 'registeredAt']]
    });}

const listAllRoleFilterUsers = async (role) => {
    return await db.user.findAll({
        include: [{
            model: db.role,
            where: {name: role},
            attributes: ['name']
        }],
        attributes: ['firstName', 'lastName', ['createdAt', 'registeredAt']]
    });
}

const groupUserCount = async (role) => {
    return await db.user.findAll({
        attributes: ['user.*', 'role.*', [db.sequelize.fn('COUNT', 'role.id'), 'roleCount']],
        include: [
            { 
                model: db.role, 
                attributes: ['name']
            }],
        group: ['user.role_id']
    });
};

module.exports = { signup, login, listAllUsers, listAllRoleFilterUsers, groupUserCount };
