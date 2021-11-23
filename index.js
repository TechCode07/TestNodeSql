// Express Init
const app = require('./startup/express').init();

// Default Configs
const config = require('./config/environment');

// Database Init
require('./startup/db').init();

// Routes Init
require('./startup/routes').init(app);

// Start Server
const portNumber = process.env.PORT || config.PORT;
app.listen(portNumber, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(`Listening on port ${portNumber}`);
    }
});

module.exports = app;

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});
