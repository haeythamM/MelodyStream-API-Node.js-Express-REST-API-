const express = require('express');
const router = express.Router();
const instrumentsController = require('../controllers/instrumentsController');

router.get('/', instrumentsController.getAllInstruments);
router.get('/:id', instrumentsController.getInstrumentById);
router.post('/', instrumentsController.createInstrument);
router.put('/:id', instrumentsController.updateInstrument);
router.delete('/:id', instrumentsController.deleteInstrument);

module.exports = router;
