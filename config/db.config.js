const dev = {
    'user': 'root',
    'db': 'user',
    'dialect': 'mysql',
    'configs': {
        'host': '127.0.0.1',
        'dialect': 'mysql',
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        },
        'port': 3306,
    }
};

module.exports = { dev };
