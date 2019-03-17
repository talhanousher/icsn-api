let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Blog = new Schema(
    {
        title: String,
        description: String,
        html: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', Blog);
