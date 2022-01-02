var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  Student.find().sort('Name').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
module.exports = router;
