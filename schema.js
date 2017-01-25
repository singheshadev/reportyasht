var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    img: { data: Buffer, contentType: String }
});
module.exports = mongoose.model('Bear', BearSchema);