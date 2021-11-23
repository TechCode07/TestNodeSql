const db = require('../model');
const { Transaction } = require('sequelize');

module.exports.executeTransaction = (callBack) => {
    return db.sequelize.transaction({
        'isolationLevel': Transaction.ISOLATION_LEVELS.READ_COMMITTED
    });
};
