var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: {type: String, required: true, unique: true},
  definition: {type: String, required: true},
  origin: {type: String, required: false},
  language: {type: String, required: false},
  image: {type: String, required: false},
  sentence: {type: String, required: false},
  partOfSpeech: {type: String, required: false},
  color: {type: String, required: false},
  link: {type: String, required: false},
  font: {type: String, required: false},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Word', schema);
