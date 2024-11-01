const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = async (req, res, next) => {
    const { authorization } = req.headers;

    // Check if the authorization header is present and well-formatted
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: "You must be logged in" });
    }

    // Extract the token from the authorization header
    const token = authorization.split(' ')[1];

    try {
        // Verify the token
        const payload = jwt.verify(token, JWT_SECRET);
        const { _id } = payload;

        // Fetch user data from the database
        const userdata = await User.findById(_id);
        if (!userdata) {
            return res.status(401).json({ error: "User not found" });
        }

        // Attach user data to request object
        req.user = userdata;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: "Invalid token" });
    }
};
