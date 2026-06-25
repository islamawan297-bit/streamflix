const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    downloadMovieVideo
} = require('../controllers/movieController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let dest = '';
        if (file.fieldname === 'poster') {
            dest = path.join(__dirname, '../uploads/posters');
        } else if (file.fieldname === 'video') {
            dest = path.join(__dirname, '../uploads/videos');
        }
        
        // Ensure directory exists
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        cb(null, dest);
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|mp4|mkv|avi|mov/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only images (jpg/png) and videos (mp4/mkv/avi/mov) are allowed!'));
        }
    }
});

const uploadFields = upload.fields([
    { name: 'poster', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]);

// Routes
router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', protect, adminOnly, uploadFields, createMovie);
router.put('/:id', protect, adminOnly, uploadFields, updateMovie);
router.delete('/:id', protect, adminOnly, deleteMovie);
router.get('/:id/download', protect, downloadMovieVideo);

module.exports = router;
