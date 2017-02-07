// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var logdatabase = new Schema({
    username:String,
    name  : String,
    city : String,
    gender : String,
    email : String,
    password:String,
    filename:String
});
// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('logdatabase', logdatabase);
// make this available to our users in our Node applications
