
const mongoose = require('mongoose');
var ArticleSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model('Article', ArticleSchema);
