const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('../views/celebrities/index', {celebrities})
  })
  .catch(error => next(error));
})

router.get('/celebrities/:id', (req, res, next) => {
  let {id} = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    console.log(celebrity);
    res.render('../views/celebrities/show', celebrity);
  })
  .catch(error => next(error));
})

module.exports = router;
