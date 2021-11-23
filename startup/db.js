const { logger } = require('../app/utils/logger');

const init = () => {
    const db = require('../app/model');

    db.sequelize
        .sync({ 'force': false })
        .then(() => {
            logger.info('DB Connection has been established successfully.');
        })
        .catch((err) => {
            logger.error('Unable to connect to the database:', err);
        });
};

// Export
module.exports = { init };
