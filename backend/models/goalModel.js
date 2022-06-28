const mongoose = require('mongoose')

// @ts-ignore
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, 
    {
        timestamp: true
    }
)

module.exports = mongoose.model('Goal', goalSchema)