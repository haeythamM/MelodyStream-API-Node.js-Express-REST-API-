const express = require('express');
const router = express.Router();
const singersController = require('../controllers/singersController');

router.get('/', singersController.getAllSingers);
router.get('/:id', singersController.getSingerById);
router.post('/', singersController.createSinger);
router.put('/:id', singersController.updateSinger);
router.delete('/:id', singersController.deleteSinger);

module.exports = router;
