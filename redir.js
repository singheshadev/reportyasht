/**
 * Created by lcom23_one on 1/24/2017.
 */
var con1=require('./config1.js')
var express=require('express')
var app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname+"/output.html");

});
var server = app.listen(con1.port, function() {
    console.log('Ready on port %d', server.address().port);
});
console.log(con1.port);