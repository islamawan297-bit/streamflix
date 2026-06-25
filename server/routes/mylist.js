const express = require('express');
const router = express.Router();
const { getMyList, addToMyList, removeFromMyList } = require('../controllers/mylistController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect); // Secure all mylist routes

router.route('/')
    .get(getMyList)
    .post(addToMyList);

router.route('/:id')
    .delete(removeFromMyList);

module.exports = router;
