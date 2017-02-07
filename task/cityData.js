// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var citySchema = new Schema({
    id : Number,
    name  : String,
    state_id: Number

});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('City', citySchema);

// make this available to our users in our Node applications
/**
 * Created by lcom23_one on 2/4/2017.
 */
