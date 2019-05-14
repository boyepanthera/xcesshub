const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Defining the data inside the fundSchema
const fundSchema = new Schema({
    donorId: ObjectId,
    donorName: String,
    amount: Number,
    date: {type: Date, default: Date.now}
});

// Creating the Fund Schema/model in database
const Fund = mongoose.model('Fund', fundSchema);

module.exports = Fund
