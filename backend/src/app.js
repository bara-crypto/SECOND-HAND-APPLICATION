const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const washingMachineRoutes = require('./routes/washingMachine');
const acRoutes = require('./routes/ac');
const fridgeRoutes = require('./routes/fridge');
const allRoutes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

app.use('/washing-machine', washingMachineRoutes);
app.use('/ac', acRoutes);
app.use('/fridge', fridgeRoutes);
app.use('/all', allRoutes);

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

module.exports = app;
