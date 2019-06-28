
const mongoose = require('mongoose');
var ArticleSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
})

module.exports = mongoose.model('Article', ArticleSchema);
