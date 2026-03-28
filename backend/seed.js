const mongoose = require('mongoose');
require('dotenv').config();
const { WashingMachine, AC, Fridge } = require('./src/models/Item');

const sampleData = {
    washingMachines: [
        {
            id: 1,
            name: "Samsung 7kg Fully Automatic",
            price: 15000,
            Description: "Fully automatic front load washing machine with digital inverter",
            Spec: { ton: 0, star: 5, year_of_use: 2 },
            Image: ["samsung_wm_1.jpg", "samsung_wm_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 2,
            name: "LG 6.5kg Semi Automatic",
            price: 8500,
            Description: "Semi-automatic top load washing machine, budget friendly",
            Spec: { ton: 0, star: 3, year_of_use: 3 },
            Image: ["lg_wm_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 3,
            name: "Whirlpool 7.5kg Supreme Care",
            price: 22000,
            Description: "Premium front load with 6th sense technology",
            Spec: { ton: 0, star: 5, year_of_use: 1 },
            Image: ["whirlpool_wm_1.jpg", "whirlpool_wm_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 4,
            name: "Bosch 8kg Logixx 8",
            price: 35000,
            Description: "German engineered with VarioDrum technology",
            Spec: { ton: 0, star: 5, year_of_use: 1 },
            Image: ["bosch_wm_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 5,
            name: "IFB 6kg Venus",
            price: 18000,
            Description: "Fully automatic with 3D wash technology",
            Spec: { ton: 0, star: 4, year_of_use: 2 },
            Image: ["ifb_wm_1.jpg", "ifb_wm_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        }
    ],
    acs: [
        {
            id: 101,
            name: "Split AC 1.5 Ton",
            price: 32000,
            Description: "1.5 ton split AC with inverter technology",
            Spec: { ton: 1.5, star: 5, year_of_use: 1 },
            Image: ["split_ac_1.jpg", "split_ac_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 102,
            name: "Window AC 1 Ton",
            price: 18000,
            Description: "Compact window AC perfect for small rooms",
            Spec: { ton: 1, star: 3, year_of_use: 3 },
            Image: ["window_ac_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 103,
            name: "Split AC 2 Ton",
            price: 45000,
            Description: "2 ton split AC for large rooms, inverter ready",
            Spec: { ton: 2, star: 5, year_of_use: 2 },
            Image: ["split_ac_2ton_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 104,
            name: "Cassette AC 2.5 Ton",
            price: 65000,
            Description: "Ceiling cassette AC for commercial spaces",
            Spec: { ton: 2.5, star: 4, year_of_use: 2 },
            Image: ["cassette_ac_1.jpg", "cassette_ac_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 105,
            name: "Inverter AC 1 Ton",
            price: 28000,
            Description: "Energy efficient inverter AC with rapid cooling",
            Spec: { ton: 1, star: 5, year_of_use: 1 },
            Image: ["inverter_ac_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        }
    ],
    fridges: [
        {
            id: 201,
            name: "Samsung 253L Frost Free",
            price: 24000,
            Description: "253 liter frost free double door refrigerator",
            Spec: { ton: 0, star: 3, year_of_use: 2 },
            Image: ["samsung_fridge_1.jpg", "samsung_fridge_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 202,
            name: "LG 260L Direct Cool",
            price: 19000,
            Description: "260 liter direct cool single door",
            Spec: { ton: 0, star: 4, year_of_use: 3 },
            Image: ["lg_fridge_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 203,
            name: "Whirlpool 340L Frost Free",
            price: 32000,
            Description: "340 liter frost free triple door with inverter",
            Spec: { ton: 0, star: 5, year_of_use: 1 },
            Image: ["whirlpool_fridge_1.jpg", "whirlpool_fridge_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 204,
            name: "Godrej 190L Direct Cool",
            price: 14000,
            Description: "Compact single door for bachelors/couples",
            Spec: { ton: 0, star: 2, year_of_use: 4 },
            Image: ["godrej_fridge_1.jpg"],
            IsViewAble: true,
            IsImageExists: true
        },
        {
            id: 205,
            name: "Bosch 324L Multi Door",
            price: 55000,
            Description: "Premium multi door with VitaFresh technology",
            Spec: { ton: 0, star: 5, year_of_use: 1 },
            Image: ["bosch_fridge_1.jpg", "bosch_fridge_2.jpg"],
            IsViewAble: true,
            IsImageExists: true
        }
    ]
};

const uploadData = async () => {
    try {
        const localUri = `${process.env.MONGODB_LOCAL}/${process.env.MONGODB_LOCAL_DB_NAME}`;
        await mongoose.connect(localUri);
        console.log('Connected to MongoDB');

        console.log('Clearing existing data...');
        await WashingMachine.deleteMany({});
        await AC.deleteMany({});
        await Fridge.deleteMany({});

        console.log('Inserting Washing Machines...');
        await WashingMachine.insertMany(sampleData.washingMachines);
        console.log(`Inserted ${sampleData.washingMachines.length} washing machines`);

        console.log('Inserting ACs...');
        await AC.insertMany(sampleData.acs);
        console.log(`Inserted ${sampleData.acs.length} ACs`);

        console.log('Inserting Fridges...');
        await Fridge.insertMany(sampleData.fridges);
        console.log(`Inserted ${sampleData.fridges.length} fridges`);

        console.log('\n✅ All sample data uploaded successfully!');
        console.log(`Total: ${sampleData.washingMachines.length + sampleData.acs.length + sampleData.fridges.length} items`);

        await mongoose.connection.close();
        console.log('Database connection closed');
        process.exit(0);
    } catch (error) {
        console.error('Error uploading data:', error.message);
        process.exit(1);
    }
};

uploadData();
