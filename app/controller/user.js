const validator = require('../validator/user');
const userService = require('../service/user');
const response = require('../handler/response');
const { executeTransaction } = require('../utils/sequilize.transaction');
const { logger } = require('../utils/logger');

const signup = async (req, res) => {
    const transaction = await executeTransaction();
    try {
        const { error, value } = validator.signupSchema.validate(req.body, validator.defaults);
        if(error) {
            throw response.createError(1000, error.message); // BAD_REQUEST
        }
        await userService.signup(value, transaction);
        await transaction.commit();
        return res.status(200).send(response.success({}));
    }
    catch(e) {
        logger.error(e);
        await transaction.rollback();
        return res.status(400).send(response.error(e.code, e.message));
    }
};

const login = async (req, res) => {
    try {
        const { error, value } = validator.loginSchema.validate(req.body, validator.defaults);
        if(error) {
            throw response.createError(1000, error.message); // BAD_REQUEST
        }
        const loginRes = await userService.login(value);
        return res.status(200).send(response.success(loginRes));
    }
    catch(e) {
        logger.error(e);
        return res.status(400).send(response.error(e.code, e.message));
    }
};

const listAllUsers = async (req, res) => {
    try {
        const usersRes = await userService.listAllUsers();
        return res.status(200).send(response.success(usersRes));
    }
    catch(e) {
        logger.error(e);
        return res.status(400).send(response.error(e.code, e.message));
    }
};

const listAllRoleFilterUsers = async (req, res) => {
    try {
        if(!req.params.role) {
            throw response.createError(1000, 'Insufficient Params'); // BAD_REQUEST
        }
        const usersRes = await userService.listAllRoleFilterUsers(req.params.role);
        return res.status(200).send(response.success(usersRes));
    }
    catch(e) {
        logger.error(e);
        return res.status(400).send(response.error(e.code, e.message));
    }
};

const groupUserCount = async (req, res) => {
    try {
        const usersRes = await userService.groupUserCount();
        return res.status(200).send(response.success(usersRes));
    }
    catch(e) {
        logger.error(e);
        return res.status(400).send(response.error(e.code, e.message));
    }
};

module.exports = { signup, login, listAllUsers, listAllRoleFilterUsers, groupUserCount};
