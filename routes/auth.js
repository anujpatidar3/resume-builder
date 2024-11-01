const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model("User");
const { JWT_SECRET, SENDGRID_API_KEY } = require('../config/keys');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

// Set up transporter using environment variable for API key
const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: SENDGRID_API_KEY
    }
}));

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    
    try {
        const savedUser = await User.findOne({ email });
        if (savedUser) {
            return res.status(422).json({ error: "User already exists with that email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword, name });

        await user.save();
        await transporter.sendMail({
            to: user.email,
            from: "anujpatidar33@gmail.com",
            subject: "Sign Up Successfully",
            html: "<h1>Welcome to Resume Builder</h1>"
        });

        res.json({ message: "User saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please provide email and password" });
    }

    try {
        const savedUser = await User.findOne({ email });
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email ID or Password" });
        }

        const doMatch = await bcrypt.compare(password, savedUser.password);
        if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            const { _id, name, email } = savedUser;
            return res.json({ token, user: { _id, name, email } });
        } else {
            return res.status(422).json({ error: "Invalid Email ID or Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/resetpassword', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(422).json({ error: "User doesn't exist" });
        }

        const token = crypto.randomBytes(32).toString("hex");
        user.resetToken = token;
        user.expireToken = Date.now() + 3600000; // 1 hour expiry
        await user.save();

        await transporter.sendMail({
            to: user.email,
            from: "anujpatidar33@gmail.com",
            subject: "Password Reset",
            html: `
                <p>You requested for resetting password</p>
                <h5>Click on this <a href="https://resume-builder71943.herokuapp.com/reset/${token}">link</a> to reset your password</h5>
            `
        });

        res.json({ message: "Check your email for password reset" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/newpassword', async (req, res) => {
    const { password: newPassword, token: sentToken } = req.body;

    try {
        const user = await User.findOne({
            resetToken: sentToken,
            expireToken: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(422).json({ error: "Try Again, session expired" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        await user.save();

        res.json({ message: "Password updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
