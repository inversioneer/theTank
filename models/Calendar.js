const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({//One database entry for each stock
    symbol: {
        type: String,
        required:true,
        unique: true
    },
    filing_date: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true
    }
});

module.exports = Calendar = mongoose.model('calendar', CalendarSchema)