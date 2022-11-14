const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({//One database entry for each update
    update: {
        type: String,
        required:true,
    },
    date: {
        type: String,
        required:true
    }
});

module.exports = UpdateLog = mongoose.model('updatelog', CalendarSchema)