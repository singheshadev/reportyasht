// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var personSchema = new Schema({

    name  : String,
    state : String,
    city : String,
    gender : String,
    email : String,
    ufile : String
});
// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Person', personSchema);
// make this available to our users in our Node applications
