const exportObject = {
    'EMAIL_CODE_EXPIRY_MINUTES': 60,
    'PASSWORD_PATTERN': '^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$',
    'CAPTCHA_ASSETS_DIRECTORY': './assets/captcha_assets',
    'REDIS_EXPIRY': 20
};

module.exports = Object.freeze(exportObject); 
