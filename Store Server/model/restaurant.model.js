const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        index: 'text'
    },
    tags: [String],
    location: String,
    rating: Number,
})

module.exports = mongoose.model("Restaurant", restaurantSchema);