// routes/chatRoutes.js

const express = require("express");
const router = express.Router();

const {
    saveMessage,
    getHistory
} = require("../controllers/chatController");

const authMiddleware =
    require("../middleware/authMiddleware");

router.post(
    "/message",
    authMiddleware,
    saveMessage
);

router.get(
    "/history",
    authMiddleware,
    getHistory
);

module.exports = router;