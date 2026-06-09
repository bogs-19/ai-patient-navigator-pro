// controllers/chatController.js

const Chat = require("../models/Chat");

// Simpan pesan baru
exports.saveMessage = async (req, res) => {

    try {

        const { sender, message } = req.body;

        if (!sender || !message) {
            return res.status(400).json({
                success: false,
                message: "Sender dan message wajib diisi"
            });
        }

        const chat = await Chat.create({
            userId: req.user.id,
            sender,
            message
        });

        res.status(201).json({
            success: true,
            data: chat
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Ambil riwayat chat user yang sedang login
exports.getHistory = async (req, res) => {

    try {

        const chats = await Chat.find({
            userId: req.user.id
        }).sort({
            createdAt: 1
        });

        res.status(200).json({
            success: true,
            count: chats.length,
            data: chats
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};