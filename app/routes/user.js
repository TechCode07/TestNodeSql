const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const auth = require('../middleware/auth')

router.route('/signup').post(userController.signup);
router.route('/login').post(userController.login);
router.route('/').get(auth.verifyBearerToken, auth.isSuperAdmin, userController.listAllUsers);
router.route('/:role').get(auth.verifyBearerToken, auth.isSuperAdmin, userController.listAllRoleFilterUsers);
router.route('/role/count').get(auth.verifyBearerToken, auth.isSuperAdmin, userController.groupUserCount);

// Export router
module.exports = router;
