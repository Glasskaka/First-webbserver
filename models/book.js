const mongoose = require('mongoose')
const coverImageBasePath = 'uploads/bookCovers'
const path = require('path')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    cover: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
})

bookSchema.virtual('coverImagePath').get(function(){ //creates a virtual property for the bookSchema
    if (this.cover != null) {
        return path.join('/', coverImageBasePath, this.cover)
    }
})

module.exports = mongoose.model('Book', bookSchema)
module.exports.coverImageBasePath = coverImageBasePath