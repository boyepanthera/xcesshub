const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Defining the data inside the housingSchema
const housingSchema = new Schema({
    donorId: ObjectId,
    donorName: String,
    address: {type: String, default: "to be communicated by Admin"},
    spaceDescription: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Creating the Housing Schema/model in database
const Housing = mongoose.model('Housing', housingSchema);
module.exports = Housing
