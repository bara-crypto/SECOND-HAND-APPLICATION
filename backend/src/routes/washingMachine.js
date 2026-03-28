const express = require('express');
const router = express.Router();
const { getWashingMachines, uploadWashingMachine, deleteWashingMachine } = require('../controllers/washingMachineController');

router.get('/:n', getWashingMachines);
router.post('/upload', uploadWashingMachine);
router.delete('/:id', deleteWashingMachine);

module.exports = router;
