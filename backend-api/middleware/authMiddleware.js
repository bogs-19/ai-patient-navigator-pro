const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Token tidak ditemukan"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "SUPER_SECRET_KEY_HACKATHON"
        );

        req.user = {
            id: decoded.userId
        };

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Token tidak valid"
        });

    }

};