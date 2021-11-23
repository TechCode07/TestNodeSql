'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../../config/db.config')['dev'];
const { logger } = require('../utils/logger');

const db = {};

const sequelize =  new Sequelize(config.db, config.user, config.password, {
    ...config.configs,
    'logging': msg => logger.debug(msg),
    'operatorsAliases': 0
});

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//= ==============================
// Define all relationships here below
//= ==============================

module.exports = db;
