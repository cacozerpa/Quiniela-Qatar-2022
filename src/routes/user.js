const {Router} = require('express');
const { createUser } = require('../helpers/userHelper');
const router = Router();

router.post('/create', createUser);

module.exports = router;