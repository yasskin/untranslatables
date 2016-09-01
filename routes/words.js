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
      message: 'Saved word',
      obj: result
    });
  });
});

router.patch('/:id', function(req, res, next) {
  Word.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!doc) {
      return res.status(404).json({
        title: 'No word found',
        error: {message: 'Word cannot be found'}
      });
    }
    doc.name = req.body.name;
    doc.definition = req.body.definition;
    doc.origin= req.body.origin;
    doc.language= req.body.language;
    doc.sentence= req.body.sentence;
    doc.partOfSpeech= req.body.partOfSpeech;
    doc.color= req.body.color;
    doc.link= req.body.link;
    doc.font= req.body.font;
    doc.image= req.body.image;
    doc.imageCaption= req.body.imageCaption;
    doc.imageSource= req.body.imageSource;
    doc.save(function(err, result) {
      if (err) {
        return res.status(404).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Word.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!doc) {
      return res.status(404).json({
        title: 'No word found',
        error: {message: 'Word cannot be found'}
      });
    }
    doc.remove(function(err, result) {
      if (err) {
        return res.status(404).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: result
      });
    });
  });
});

module.exports = router;
