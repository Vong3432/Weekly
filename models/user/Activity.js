const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    activity_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,        
    },
    title: {
        type: String,
        required: true
    },
    dateString: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    }, 
    time: {
        type: String
    },
    reminder_date: {
        type: Date
    },
    reminder: {
        type: String
    }
})

module.exports = mongoose.model("Activity", ActivitySchema);