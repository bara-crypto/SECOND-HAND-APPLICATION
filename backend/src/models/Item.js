const mongoose = require('mongoose');

const ItemSpecSchema = new mongoose.Schema({
    ton: { type: Number, required: true },
    star: { type: Number, required: true },
    year_of_use: { type: Number, required: true }
}, { _id: false });

const ItemSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    Description: { type: String, required: true },
    Spec: { type: ItemSpecSchema, required: true },
    Image: { type: [String], default: [] },
    IsViewAble: { type: Boolean, default: true },
    IsImageExists: { type: Boolean, default: false }
});

const WashingMachine = mongoose.model('Washing_Machine', ItemSchema, 'Washing_Machine');
const AC = mongoose.model('AC', ItemSchema, 'AC');
const Fridge = mongoose.model('Fridge', ItemSchema, 'Fridge');

module.exports = { WashingMachine, AC, Fridge };
