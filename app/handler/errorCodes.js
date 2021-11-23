// Error Code List
const ERROR_CODES = [];

// 0-999 : Internal
ERROR_CODES[0] = { 'msg': 'UNKNOWN', 'desc': 'unknown error' };
ERROR_CODES[1] = { 'msg': 'SYS_ERROR', 'desc': 'internal api error' };
ERROR_CODES[2] = { 'msg': 'SYS_DB_ERROR', 'desc': 'internal database error' };

ERROR_CODES[1000] = { 'msg': 'BAD_REQUEST', 'desc': 'bad or missing required parameter' };
ERROR_CODES[1001] = { 'msg': 'BAD_REQUEST_LENGTH', 'desc': 'length extends supported maximal characters' };
ERROR_CODES[1002] = { 'msg': 'UNAUTHORIZED', 'desc': 'unauthorized' };
ERROR_CODES[1003] = { 'msg': 'WRONFG PASSWORD', 'desc': 'wrong password' };

// Joi Validation Labels
const JOI_VALIDATION_LABELS = {
    'email': 'Email',
    'password': 'Password',
    'firstName': 'First Name',
    'lastName': 'Last Name'
};

const JOI_VALIDATION_MESSAGES = {
    'stringType': 'should be a type of String',
    'minLimit': 'should have a minimum length of',
    'requiredField': 'is a required field',
    'numberType': 'should be a type of Number',
    'passwordRegex': 'should have combination of 8 characters, 1 uppercase and 1 number',
    'booleanType': 'should be a type of Boolean',
    'validEmail': 'must be a valid email'
};

exports.codes = ERROR_CODES;
exports.JOI_VALIDATION_LABELS = JOI_VALIDATION_LABELS;
exports.JOI_VALIDATION_MESSAGES = JOI_VALIDATION_MESSAGES;
