const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');

router.get('/admin', ctrlAdmin.admin);

module.exports = router;