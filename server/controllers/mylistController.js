const User = require('../models/User');
const Movie = require('../models/Movie');

// @desc    Get current user's my list
// @route   GET /api/mylist
// @access  Private
exports.getMyList = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('mylist');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, count: user.mylist.length, data: user.mylist });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Add movie to my list
// @route   POST /api/mylist
// @access  Private
exports.addToMyList = async (req, res) => {
    try {
        const { movieId } = req.body;

        // Check if movie exists
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ success: false, message: 'Movie not found' });
        }

        const user = await User.findById(req.user.id);

        // Check if already in list
        if (user.mylist.includes(movieId)) {
            return res.status(400).json({ success: false, message: 'Already in your list' });
        }

        user.mylist.push(movieId);
        await user.save();

        res.json({ success: true, message: 'Added to your list', data: user.mylist });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Remove movie from my list
// @route   DELETE /api/mylist/:id
// @access  Private
exports.removeFromMyList = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        
        // Check if movie in list
        if (!user.mylist.includes(req.params.id)) {
            return res.status(400).json({ success: false, message: 'Movie not in your list' });
        }

        user.mylist = user.mylist.filter(id => id.toString() !== req.params.id);
        await user.save();

        res.json({ success: true, message: 'Removed from your list', data: user.mylist });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
