const mongoose = require('../db/connection')

const characterSchema = new mongoose.Schema({
    name: String,
    movie: String,
    series: String
})

module.exports = mongoose.model('Character', characterSchema)