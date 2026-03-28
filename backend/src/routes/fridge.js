const express = require('express');
const router = express.Router();
const { getFridges, uploadFridge, deleteFridge } = require('../controllers/fridgeController');

router.get('/:n', getFridges);
router.post('/upload', uploadFridge);
router.delete('/:id', deleteFridge);

module.exports = router;
