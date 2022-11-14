const mongoose = require('mongoose');

const ScreenSchema = new mongoose.Schema({//One database entry for each screen criteria
    source: {
        type: String,
        required:true
    },
    criteria: {
        type: String,
        required:true,
        unique: true
    },
    data: [
        {
            quarter: {
                type: Date,
                required: true
            },
            stocks: [
                {
                    ticker: {
                        type: String,
                        required: true
                    },
                    value: {
                        type: Number
                    },
                }
                
            ],
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ScreenItem = mongoose.model('screen', ScreenSchema)