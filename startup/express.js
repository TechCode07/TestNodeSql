const express = require('express');
const cors = require('cors');
const config = require('../config/environment');
const helmet = require('helmet');

const init = () => {
    const app = express();
    app.use(cors(config.corsOptions));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ 'extended': false }));
    app.disable('x-powered-by');
    require('dotenv').config();
    return app;
};

module.exports = { init };
