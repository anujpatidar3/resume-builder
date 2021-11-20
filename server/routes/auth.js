const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model("User");
const Temp = mongoose.model("Temp");
const {JWT_SECRET}=require('../keys')
const requireLogin =require('../middleware/requireLogin')


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        res.status(422).json({ error: "Please add all the fields" })
    }
    await User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with that email" })
            }
            bcrypt.hash(password, 10)
                .then(hashedPassword => {
                    const user = new User({
                        email,
                        password: hashedPassword,
                        name
                    })

                    user.save().then(user => {
                        res.json({ message: "Saved Succesfully" })
                    }).catch(err => {
                        console.log(err)
                    })
                })
        }).catch(err => {
            console.log(err)
        })
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ error: "Please Provide email or password" });
    }
    await User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email ID or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        //  res.json({ message: "User Succesfully signed in" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const { _id, name, email} = savedUser;
                        res.json({ token, user: { _id, name, email} })
                    } else {
                        res.status.json({ error: "Invalid Email ID or Password" })
                    }
                }).catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })
})


module.exports = router