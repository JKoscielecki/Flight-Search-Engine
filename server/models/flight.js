const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departureAirport: String,
    arrivalAirport: String,
    departureDate: Date,
    returnDate: Date,
    price: Number,
});

module.exports = mongoose.model('Flight', flightSchema);
