/**
 * Created by lcom23_one on 1/20/2017.
 */




var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String,
    age:  String
});

module.exports = mongoose.model('Bear', BearSchema);