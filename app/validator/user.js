const Joi = require('joi');
const error = require('../handler/errorCodes');
const constants = require('../../config/constants');
const passwordRegex = new RegExp(constants.PASSWORD_PATTERN);

const signupSchema = Joi.object(
    {
        'email': Joi.string().email().lowercase().required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'string.email': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.validEmail}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.requiredField}`
        }),
        'password': Joi.string().regex(passwordRegex).required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.password} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.password} ${error.JOI_VALIDATION_MESSAGES.requiredField}`,
            'string.pattern.base': `${error.JOI_VALIDATION_LABELS.password} ${error.JOI_VALIDATION_MESSAGES.passwordRegex}`
        }),
        'firstName': Joi.string().label(error.JOI_VALIDATION_LABELS.firstName).required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.firstName} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.firstName} ${error.JOI_VALIDATION_MESSAGES.requiredField}`
        }),
        'lastName': Joi.string().label(error.JOI_VALIDATION_LABELS.lastName).required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.lastName} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.lastName} ${error.JOI_VALIDATION_MESSAGES.requiredField}`
        })
    }
);

const loginSchema = Joi.object(
    {
        'email': Joi.string().email().lowercase().required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'string.email': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.validEmail}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.email} ${error.JOI_VALIDATION_MESSAGES.requiredField}`
        }),
        'password': Joi.string().required().messages({
            'string.base': `${error.JOI_VALIDATION_LABELS.password} ${error.JOI_VALIDATION_MESSAGES.stringType}`,
            'any.required': `${error.JOI_VALIDATION_LABELS.password} ${error.JOI_VALIDATION_MESSAGES.requiredField}`
        })
    }
);

const defaults = {
    'abortEarly': false, // include all errors
    'allowUnknown': true, // ignore unknown props
    'stripUnknown': true // remove unknown props
};

const message = (error) => { return `${error.details.map(x => x.message).join(', ')}`; };

module.exports = {
    signupSchema,
    loginSchema,
    defaults,
    message
};
