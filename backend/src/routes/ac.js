const express = require('express');
const router = express.Router();
const { getACs, uploadAC, deleteAC } = require('../controllers/acController');

router.get('/:n', getACs);
router.post('/upload', uploadAC);
router.delete('/:id', deleteAC);

module.exports = router;
