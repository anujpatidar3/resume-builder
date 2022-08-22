const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model("User");
const { JWT_SECRET } = require('../config/keys')
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')
//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

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: "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"
    }
}))

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
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
                        transporter.sendMail({
                            to: user.email,
                            from: "anujpatidar33@gmail.com",
                            subject: "Sign Up Succesfully",
                            html: "<h1>Welcome to Resume Builder</h1>"
                        })
                            (res.json({ message: "User Saved Succesfully" }))
                        
                    }).catch(err => {
                        console.log(err)
                    })
                })
        }).catch(err => {
            console.log(err)
        })
})
router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(422).json({ error: "Please Provide email or password" });
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email ID or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        //  res.json({ message: "User Succesfully signed in" })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const { _id, name, email } = savedUser;
                        res.json({ token, user: { _id, name, email } })
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
router.post('/resetpassword', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User doesn't exist" })
                }
                user.resetToken = token
                user.expireToken = Date.now() + 3600000
                user.save().then((result) => {
                    transporter.sendMail({
                        to: user.email,
                        from: "anujpatidar33@gmail.com",
                        subject: "Password reset",
                        html: `
                        <p>You requested for resetting password</p>
                        <h5> Click on this <a href="https://resume-builder71943.herokuapp.com/reset/${token}">link</a> to reset password</h5>
                        `
                    })
                    res.json({ message: "Check your Email for Password Reset" })
                })
            })
    })
})
router.post('/newpassword',(req,res)=>{
    const newPassword=req.body.password
    const sentToken=req.body.token
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try Again Session Expired"})
        }
        bcrypt.hash(newPassword,10).then(hashedPassword=>{
            user.password=hashedPassword
            user.resetToken=undefined
            user.expireToken=undefined
            user.save().then((savedUser)=>{
                res.json({message:"Password Updated"})
            })
        })
    }).catch(err=>{
        console.log(err)
    })

})

module.exports = router
