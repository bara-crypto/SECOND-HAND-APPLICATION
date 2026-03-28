// acController.test.js
const { getACs, uploadAC, deleteAC } = require('../controllers/acController');
const { AC } = require('../models/Item');

jest.mock('../models/Item', () => {
  const AC = jest.fn(); // constructor function
  AC.find = jest.fn();
  AC.findOneAndDelete = jest.fn();
  return { AC };
});


describe('AC Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  describe('getACs', () => {
    it('should return items successfully', async () => {
      req.params.n = '2';
      const items = [{ id: 1 }, { id: 2 }];
      AC.find.mockReturnValueOnce({ limit: jest.fn().mockResolvedValue(items) });

      await getACs(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        count: 2,
        data: items,
      });
    });

    it('should handle errors', async () => {
      AC.find.mockImplementationOnce(() => {
        throw new Error('DB error');
      });

      await getACs(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'DB error',
      });
    });
  });

  describe('uploadAC', () => {
    it('should upload item successfully', async () => {
      req.body = { name: 'AC1' };
      const item = { ...req.body, save: jest.fn().mockResolvedValue(true) };
      AC.mockImplementationOnce(() => item);

      await uploadAC(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: item,
      });
    });

    it('should handle upload error', async () => {
      req.body = { name: 'AC1' };
      const item = { ...req.body, save: jest.fn().mockRejectedValue(new Error('Save failed')) };
      AC.mockImplementationOnce(() => item);

      await uploadAC(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Save failed',
      });
    });
  });

  describe('deleteAC', () => {
    it('should delete item successfully', async () => {
      req.params.id = '123';
      AC.findOneAndDelete.mockResolvedValueOnce({ id: '123' });

      await deleteAC(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Item deleted successfully',
      });
    });

    it('should return 404 if item not found', async () => {
      req.params.id = '123';
      AC.findOneAndDelete.mockResolvedValueOnce(null);

      await deleteAC(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Item not found',
      });
    });

    it('should handle delete error', async () => {
      req.params.id = '123';
      AC.findOneAndDelete.mockRejectedValueOnce(new Error('Delete failed'));

      await deleteAC(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Delete failed',
      });
    });
  });
});
