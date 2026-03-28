// fridgeController.test.js
const { getFridges, uploadFridge, deleteFridge } = require('../controllers/fridgeController');
const { Fridge } = require('../models/Item');

jest.mock('../models/Item', () => {
  const Fridge = jest.fn(); // constructor
  Fridge.find = jest.fn();
  Fridge.findOneAndDelete = jest.fn();
  return { Fridge };
});

describe('Fridge Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  describe('getFridges', () => {
    it('should return items successfully', async () => {
      req.params.n = '2';
      const items = [{ id: 1 }, { id: 2 }];
      Fridge.find.mockReturnValueOnce({ limit: jest.fn().mockResolvedValue(items) });

      await getFridges(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        count: 2,
        data: items,
      });
    });

    it('should handle errors', async () => {
      Fridge.find.mockImplementationOnce(() => { throw new Error('DB error'); });

      await getFridges(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'DB error',
      });
    });
  });

  describe('uploadFridge', () => {
    it('should upload item successfully', async () => {
      req.body = { name: 'Fridge1' };
      const item = { ...req.body, save: jest.fn().mockResolvedValue(true) };
      Fridge.mockImplementationOnce(() => item);

      await uploadFridge(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: item,
      });
    });

    it('should handle upload error', async () => {
      req.body = { name: 'Fridge1' };
      const item = { ...req.body, save: jest.fn().mockRejectedValue(new Error('Save failed')) };
      Fridge.mockImplementationOnce(() => item);

      await uploadFridge(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Save failed',
      });
    });
  });

  describe('deleteFridge', () => {
    it('should delete item successfully', async () => {
      req.params.id = '123';
      Fridge.findOneAndDelete.mockResolvedValueOnce({ id: '123' });

      await deleteFridge(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Item deleted successfully',
      });
    });

    it('should return 404 if item not found', async () => {
      req.params.id = '123';
      Fridge.findOneAndDelete.mockResolvedValueOnce(null);

      await deleteFridge(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Item not found',
      });
    });

    it('should handle delete error', async () => {
      req.params.id = '123';
      Fridge.findOneAndDelete.mockRejectedValueOnce(new Error('Delete failed'));

      await deleteFridge(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Delete failed',
      });
    });
  });
});
