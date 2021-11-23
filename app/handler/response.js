// Include dependecies
const err = require('./errorCodes');

const response = {
    'success': function(data, customMsg) {
        const now = Date.now();

        if(!data) {
            this.error();
        }

        return {
            'success': true,
            'result': data,
            'error': -1,
            'timestamp': now,
            'timestampConverted': new Date(now)
        };
    },
    'error': function(errorCode = 0, customMsg = null) {
        if(!err.codes[errorCode]) errorCode = 0;

        const now = Date.now();

        return {
            'success': false,
            'result': {},
            'error': {
                'code': errorCode,
                'message': err.codes[errorCode].msg,
                'description': customMsg || err.codes[errorCode].desc
            },
            'timestamp': now,
            'timestampConverted': new Date(now)
        };
    },
    'createError': function (errorCode = 0, customMsg = null) {
        return {
            'code': errorCode,
            'message': customMsg || err.codes[errorCode].desc
        };
    },
    'getAllErrors': function() {
        const r = {};

        err.codes.forEach(function(item, index) {
            r[index] = item;
        });

        return r;
    }
};

// Export
module.exports = response;
