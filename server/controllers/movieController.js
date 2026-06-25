const Movie = require('../models/Movie');
const path = require('path');
const fs = require('fs');

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json({ success: true, count: movies.length, data: movies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single movie
// @route   GET /api/movies/:id
// @access  Public
exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }
        res.json({ success: true, data: movie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create/Upload a movie
// @route   POST /api/movies
// @access  Private/Admin
exports.createMovie = async (req, res) => {
    try {
        const { title, description, genre, year, rating, duration, category, type, popular, cast, mood } = req.body;

        // Check if files are uploaded
        if (!req.files || !req.files.poster || !req.files.video) {
            return res.status(400).json({ success: false, message: 'Please upload both poster and video files' });
        }

        const posterFile = req.files.poster[0];
        const videoFile = req.files.video[0];

        // Format relative paths
        const posterPath = `/uploads/posters/${posterFile.filename}`;
        const videoPath = `/uploads/videos/${videoFile.filename}`;

        const movie = await Movie.create({
            title,
            description,
            genre: Array.isArray(genre) ? genre : genre.split(',').map(g => g.trim()),
            year,
            rating,
            poster: posterPath,
            video: videoPath,
            duration,
            category,
            type,
            popular: popular === 'true' || popular === true,
            cast: Array.isArray(cast) ? cast : cast.split(',').map(c => c.trim()),
            mood: Array.isArray(mood) ? mood : mood.split(',').map(m => m.trim())
        });

        res.status(201).json({ success: true, data: movie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Private/Admin
exports.updateMovie = async (req, res) => {
    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }

        const updates = { ...req.body };
        
        // Handle file updates if provided
        if (req.files) {
            if (req.files.poster) {
                // Delete old poster if exists
                const oldPosterPath = path.join(__dirname, '..', movie.poster);
                if (fs.existsSync(oldPosterPath)) fs.unlinkSync(oldPosterPath);
                updates.poster = `/uploads/posters/${req.files.poster[0].filename}`;
            }
            if (req.files.video) {
                // Delete old video if exists
                const oldVideoPath = path.join(__dirname, '..', movie.video);
                if (fs.existsSync(oldVideoPath)) fs.unlinkSync(oldVideoPath);
                updates.video = `/uploads/videos/${req.files.video[0].filename}`;
            }
        }

        if (updates.genre && !Array.isArray(updates.genre)) {
            updates.genre = updates.genre.split(',').map(g => g.trim());
        }
        if (updates.cast && !Array.isArray(updates.cast)) {
            updates.cast = updates.cast.split(',').map(c => c.trim());
        }
        if (updates.mood && !Array.isArray(updates.mood)) {
            updates.mood = updates.mood.split(',').map(m => m.trim());
        }

        movie = await Movie.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true
        });

        res.json({ success: true, data: movie });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private/Admin
exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }

        // Delete associated files
        const posterPath = path.join(__dirname, '..', movie.poster);
        const videoPath = path.join(__dirname, '..', movie.video);

        if (fs.existsSync(posterPath)) fs.unlinkSync(posterPath);
        if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);

        await movie.deleteOne();

        res.json({ success: true, message: 'Movie and associated files deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Download movie video file
// @route   GET /api/movies/:id/download
// @access  Private
exports.downloadMovieVideo = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }

        const videoPath = path.join(__dirname, '..', movie.video);
        if (!fs.existsSync(videoPath)) {
            return res.status(404).json({ success: false, message: 'Video file not found on server' });
        }

        // Increment download counter
        movie.downloads += 1;
        await movie.save();

        res.download(videoPath, `${movie.title.replace(/\s+/g, '_')}${path.extname(videoPath)}`);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
