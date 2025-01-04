const express = require("express");
const { createItem, getItems, getItemById, updateItem, deleteItem } = require("../controllers/itemController");
const { authenticate } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createItem);
router.get("/", authenticate, getItems);
router.get("/:id", authenticate, getItemById);
router.put("/:id", authenticate, updateItem);
router.delete("/:id", authenticate, deleteItem);

module.exports = router;
