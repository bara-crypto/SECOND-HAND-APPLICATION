// washingMachineController.test.js
const { getWashingMachines, uploadWashingMachine, deleteWashingMachine } = require('../controllers/washingMachineController');
const { WashingMachine } = require('../models/Item');

jest.mock('../models/Item', () => {
  const WashingMachine = jest.fn(); // constructor
  WashingMachine.find = jest.fn();
  WashingMachine.findOneAndDelete = jest.fn();
  return { WashingMachine };
});

describe('WashingMachine Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  describe('getWashingMachines', () => {
    it('should return items successfully', async () => {
      req.params.n = '2';
      const items = [{ id: 1 }, { id: 2 }];
      WashingMachine.find.mockReturnValueOnce({ limit: jest.fn().mockResolvedValue(items) });

      await getWashingMachines(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        count: 2,
        data: items,
      });
    });

    it('should handle errors', async () => {
      WashingMachine.find.mockImplementationOnce(() => { throw new Error('DB error'); });

      await getWashingMachines(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'DB error',
      });
    });
  });

  describe('uploadWashingMachine', () => {
    it('should upload item successfully', async () => {
      req.body = { name: 'WM1' };
      const item = { ...req.body, save: jest.fn().mockResolvedValue(true) };
      WashingMachine.mockImplementationOnce(() => item);

      await uploadWashingMachine(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: item,
      });
    });

    it('should handle upload error', async () => {
      req.body = { name: 'WM1' };
      const item = { ...req.body, save: jest.fn().mockRejectedValue(new Error('Save failed')) };
      WashingMachine.mockImplementationOnce(() => item);

      await uploadWashingMachine(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Save failed',
      });
    });
  });

  describe('deleteWashingMachine', () => {
    it('should delete item successfully', async () => {
      req.params.id = '123';
      WashingMachine.findOneAndDelete.mockResolvedValueOnce({ id: '123' });

      await deleteWashingMachine(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Item deleted successfully',
      });
    });

    it('should return 404 if item not found', async () => {
      req.params.id = '123';
      WashingMachine.findOneAndDelete.mockResolvedValueOnce(null);

      await deleteWashingMachine(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Item not found',
      });
    });

    it('should handle delete error', async () => {
      req.params.id = '123';
      WashingMachine.findOneAndDelete.mockRejectedValueOnce(new Error('Delete failed'));

      await deleteWashingMachine(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Delete failed',
      });
    });
  });
});
