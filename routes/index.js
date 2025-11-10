const express = require('express')
const router = express.Router()
const homeCtrl = require('../controllers/index')
const deleteCtrl = require('../controllers/deleteCtrl')
const createCtrl = require('../controllers/createCtrl')
const updateCtrl = require('../controllers/updateCtrl')

router.get('/', homeCtrl)
router.get('/delete/:id', deleteCtrl)
router.post('/create', createCtrl)
router.get('/update/:id/:active', updateCtrl)

module.exports = router;
