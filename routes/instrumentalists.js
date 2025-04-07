const express = require('express');
const router = express.Router();
const instrumentalistsController = require('../controllers/instrumentalistsController');

router.get('/', instrumentalistsController.getAllInstrumentalists);
router.get('/:id', instrumentalistsController.getInstrumentalistById);
router.post('/', instrumentalistsController.createInstrumentalist);
router.put('/:id', instrumentalistsController.updateInstrumentalist);
router.delete('/:id', instrumentalistsController.deleteInstrumentalist);

module.exports = router;
