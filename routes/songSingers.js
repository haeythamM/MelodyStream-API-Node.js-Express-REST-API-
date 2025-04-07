const express = require('express');
const router = express.Router();
const songSingersController = require('../controllers/songSingersController');

router.get('/', songSingersController.getAllSongSingers);
router.get('/:song_id/:singer_id', songSingersController.getSongSingerByIds);
router.post('/', songSingersController.createSongSinger);
router.delete('/:song_id/:singer_id', songSingersController.deleteSongSinger);

module.exports = router;
