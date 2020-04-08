const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema);