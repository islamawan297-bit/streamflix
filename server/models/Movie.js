const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a movie title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    genre: {
        type: [String],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    duration: {
        type: String,
        required: true
    },
    downloads: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['trending', 'scifi', 'action', 'dramas']
    },
    type: {
        type: String,
        required: true,
        enum: ['movie', 'show']
    },
    popular: {
        type: Boolean,
        default: false
    },
    cast: {
        type: [String]
    },
    mood: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
