const Item = require("../models/itemModel");

const createItem = async (req, res) => {
    try {
        const { name, description, status } = req.body;
        const item = await Item.create({ name, description, status, userId: req.user.id });
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getItems = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 10; 
        const skip = (page - 1) * limit;

        const total = await Item.countDocuments(); 
        const items = await Item.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 }); 

        const totalPages = Math.ceil(total / limit);

        res.status(200).json({
            items,
            total,
            page,
            totalPages,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getItemById = async (req, res) => {
  try {
      const item = await Item.findById(req.params.id);
      if (!item) {
          return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json(item);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
      const { name, description, status } = req.body;
      const item = await Item.findByIdAndUpdate(
          req.params.id,
          { name, description, status },
          { new: true, runValidators: true }
      );
      if (!item) {
          return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json(item);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) {
          return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = { createItem, getItems, getItemById, updateItem, deleteItem };
