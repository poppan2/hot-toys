const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hot-toys', {useNewUrlParser: true}, ()=>{
    console.log('we connected')
})

module.exports = mongoose;