//type "npm run server" to start
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path');
const cron = require('node-cron');
const app = express();
const updateTradeableStocks = require('./server_actions/financialmodelingprep');

//Connect Database
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
});

// Init Middleware
app.use(express.json({extended: false}));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/calendar', require('./routes/api/calendar'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/financialmodelingprep', require('./routes/api/financialmodelingprep'));

// Schedule tasks to be run on the server.
cron.schedule('0 3 * * 2', function() {
    updateTradeableStocks();
  });
console.log("Calendar update scheduled for Tuesday at 3:00 AM")

// Serve static assets in production
if(process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}