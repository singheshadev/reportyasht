var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
//Create schema structure
var dataSchema   = new Schema({
    name: String,
    email:  String,
    password: String
});

module.exports = mongoose.model('data1', dataSchema);