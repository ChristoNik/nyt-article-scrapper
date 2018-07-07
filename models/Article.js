const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    url: {
        type: String,
        unique: true,
        required: true,
    },
    date: {
        type: Date,
        required: false
    },
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;