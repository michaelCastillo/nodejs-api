
const mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
});

module.exports = mongoose.model('Item', ItemSchema);
