const axios = require("axios");

exports.chatWithAI = async (req, res) => {

    try {

        const { message } = req.body;

        const response = await axios.post(
            "http://localhost:8000/chat",
            {
                message
            }
        );

        res.json({
            success: true,
            ai: response.data
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "AI service unavailable"
        });

    }

};