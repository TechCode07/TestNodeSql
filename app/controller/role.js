const roleService = require('../service/role');
const response = require('../handler/response');
const { logger } = require('../utils/logger');


const add = async (req, res) => {
    try {
        const roleRes = await roleService.add(req.body);
        return res.status(200).send(response.success(roleRes));
    }
    catch(e) {
        logger.error(e);
        return res.status(400).send(response.error(e.code, e.message));
    }
};


module.exports = { add };
