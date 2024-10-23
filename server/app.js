const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require('./config/keys');

// Connect to MongoDB with error handling
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  // Add this option
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Import models
require('./models/tempUser');
require('./models/User');
require('./models/resume');

// Middleware
app.use(express.json());

// Routes
app.use(require('./routes/auth'));
app.use(require('./routes/resume'));

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), (err) => {
            if (err) {
                console.error("Error serving static file:", err);
                res.status(err.status).end();
            }
        });
    });
}

// Start the server
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT", PORT);
});
