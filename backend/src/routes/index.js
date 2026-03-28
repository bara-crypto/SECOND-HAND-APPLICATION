const express = require('express');
const router = express.Router();
const { WashingMachine, AC, Fridge } = require('../models/Item');

router.get('/:n', async (req, res) => {
    try {
        const n = parseInt(req.params.n) || 10;
        
        const [washingMachines, acs, fridges] = await Promise.all([
            WashingMachine.find({ IsViewAble: true }).limit(n),
            AC.find({ IsViewAble: true }).limit(n),
            Fridge.find({ IsViewAble: true }).limit(n)
        ]);
        
        res.json({
            success: true,
            data: {
                Washing_Machine: washingMachines,
                AC: acs,
                Fridge: fridges
            },
            counts: {
                Washing_Machine: washingMachines.length,
                AC: acs.length,
                Fridge: fridges.length
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
