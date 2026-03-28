// connectDB.test.js
const mongoose = require('mongoose');
const connectDB = require('../config/db'); // adjust path

jest.mock('mongoose', () => ({
  connect: jest.fn(),
  connection: {
    on: jest.fn(),
  },
}));


describe('connectDB', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    console.log = jest.fn();
    console.error = jest.fn();
    process.exit = jest.fn();
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should connect to local MongoDB successfully', async () => {
    process.env.MONGODB_LOCAL = 'mongodb://localhost:27017';
    process.env.MONGODB_LOCAL_DB_NAME = 'testdb';

    mongoose.connect.mockResolvedValueOnce(true);

    await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(
    'mongodb://localhost:27017/testdb'
    );

    expect(console.log).toHaveBeenCalledWith('Connected to Local MongoDB');
  });

  it('should handle connection error and exit process', async () => {
    process.env.MONGODB_LOCAL = 'mongodb://localhost:27017';
    process.env.MONGODB_LOCAL_DB_NAME = 'testdb';

    const error = new Error('Connection failed');
    mongoose.connect.mockRejectedValueOnce(error);

    await connectDB();

    expect(console.error).toHaveBeenCalledWith(
      'MongoDB connection error:',
      error.message
    );
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
