const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Defining the data inside the userSchema
const userSchema = new Schema({
    userId: ObjectId,
    userName: String,
    isVolunteer: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String, 
    },
    userDescription: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Creating the User Schema/model in database
const User = mongoose.model('User', userSchema);
module.exports = User

