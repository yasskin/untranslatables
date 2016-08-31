var express = require('express');
var router = express.Router();

var Word = require('../models/word');

router.get('/', function(req, res, next) {
  Word.find()
    .exec(function(err, docs){
      if (err) {
        return res.status(404).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

router.post('/', function(req, res, next) {
  var word = new Word({
    name: req.body.name,
    definition: req.body.definition,
    origin: req.body.origin,
    language: req.body.language,
    sentence: req.body.sentence,
    partOfSpeech: req.body.partOfSpeech,
    color: req.body.color,
    link: req.body.link,
    font: req.body.font,
    image: req.body.image,
    imageCaption: req.body.imageCaption,
    imageSource: req.body.imageSource
  });
  word.save(function(err, result) {
    if (err) {
      return res.status(404).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved message',
      obj: result
    });
  });
});



module.exports = router;
