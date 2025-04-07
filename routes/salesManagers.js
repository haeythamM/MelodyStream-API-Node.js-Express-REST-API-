const express = require('express');
const router = express.Router();
const salesManagersController = require('../controllers/salesManagersController');

router.get('/', salesManagersController.getAllManagers);
router.get('/:id', salesManagersController.getManagerById);
router.post('/', salesManagersController.createManager);
router.put('/:id', salesManagersController.updateManager);
router.delete('/:id', salesManagersController.deleteManager);

module.exports = router;
