const { WashingMachine } = require('../models/Item');

const getWashingMachines = async (req, res) => {
    try {
        const n = parseInt(req.params.n) || 10;
        const items = await WashingMachine.find({ IsViewAble: true }).limit(n);
        res.json({ success: true, count: items.length, data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const uploadWashingMachine = async (req, res) => {
    try {
        const item = new WashingMachine(req.body);
        await item.save();
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteWashingMachine = async (req, res) => {
    try {
        const item = await WashingMachine.findOneAndDelete({ id: req.params.id });
        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        res.json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getWashingMachines, uploadWashingMachine, deleteWashingMachine };
