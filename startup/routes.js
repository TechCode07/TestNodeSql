const express = require('express');
const cookieParser = require('cookie-parser');

// importing routes
const authRoutes = require('../app/routes/user');
const roleRoutes = require('../app/routes/role');

const init = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ 'extended': false }));
    app.use(cookieParser());

    app.use('/api/v1/user', authRoutes);
    app.use('/api/v1/role', roleRoutes);
};

module.exports = { init };
