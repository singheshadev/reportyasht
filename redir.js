/**
 * Created by lcom23_one on 1/24/2017.
 */
var express=require('express')
var app=express();


app.get('/re',function(req,res){
    res.sendFile(__dirname+"/output.html");
});
app.listen(8089);