var express = require('express');
var router = express.Router();

//Controller
var pointsController = require('../controllers/pointsController');

//Routes
//POST request for adding a transaction
router.post('/add', pointsController.add_points);

//POST request for spending points
router.post('/spend', pointsController.spend_points);

//GET request for getting list of points balances
router.get('/list', pointsController.get_points);

//GET request for clearing points
router.get('/clear', pointsController.clear_points);

module.exports = router;