let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Event = new Schema(
    {
        title: String,
        description: String,
        html: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Event', Event);
