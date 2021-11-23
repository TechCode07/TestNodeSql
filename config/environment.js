const corsOptions = {
    'methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // eslint-disable-next-line max-len
    'allowedHeaders': 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
};

const PORT = 3001;

module.exports = { corsOptions, PORT };
