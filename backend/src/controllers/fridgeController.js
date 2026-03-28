const { Fridge } = require('../models/Item');

const getFridges = async (req, res) => {
    try {
        const n = parseInt(req.params.n) || 10;
        const items = await Fridge.find({ IsViewAble: true }).limit(n);
        res.json({ success: true, count: items.length, data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const uploadFridge = async (req, res) => {
    try {
        const item = new Fridge(req.body);
        await item.save();
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteFridge = async (req, res) => {
    try {
        const item = await Fridge.findOneAndDelete({ id: req.params.id });
        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        res.json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getFridges, uploadFridge, deleteFridge };
