var express = require('express');
var router = express.Router();
var Assignments = require('../models/assignment')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.delete('/delassignment/:id', function(req, res, next) {
  Assignments.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
module.exports = router;
