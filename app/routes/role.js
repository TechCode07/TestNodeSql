const express = require('express');
const router = express.Router();
const roleController = require('../controller/role');

router.route('/add').post(roleController.add);

// Export router
module.exports = router;
