var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: false, unique: true},
  words: [{type: Schema.Types.ObjectId, ref: 'Word'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
