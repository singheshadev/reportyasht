// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var stateSchema = new Schema({
    id : Number,
    name  : String
});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('State', stateSchema);

// make this available to our users in our Node applications
