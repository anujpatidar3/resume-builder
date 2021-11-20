const express=require("express");
const app=express();
const mongoose=require('mongoose')
const PORT=5000;
const {MONGOURI}=require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
})
mongoose.connection.on('connected',()=>{
  console.log("Connected to MongoDB")
})

require('./models/tempUser.js')
require('./models/User.js')
require('./models/resume.js')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/resume'))


app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT", PORT)
})