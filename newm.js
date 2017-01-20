/**
 * Created by lcom23_one on 1/20/2017.
 */
var express=require('express');
var bodyParser = require('body-parser');
var MongoClient1=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";
var app = express();
var server = require('http').Server(app);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.post('/mongodbadd',function(req,res){
    MongoClient1.connect(url, function (err, db) {
        if (err) {
            console.log(err);
        }
        else
        {
            db.collection('user').insert({
                "name":req.body.name,"eid":req.body.eid,"number":req.body.number


            });
            res.send({message : "user successfully registered"});
        }
    })

})


app.post('/mongoupdate',function(req,res){
    MongoClient1.connect(url,function (err,db) {
        if(err){console.log(err);}
        else
        {
            db.collection('user').update({"eid":req.body.eid1},{$set:{"name":req.body.name1,"number":req.body.number1}});
            res.send({data:"modified"});
        }
    })
})


app.post('/mongodelete',function (req,res){

 MongoClient1.connect(url,function (err,db) {
     if(err){
         console.log(err);
     }
     else
     {
         db.collection('user').remove({"eid":req.body.eid2});
         res.send({data:"deleted"});
     }
     }

 )

})

var server = app.listen(8031, function () {


    console.log("Example app listening at http://127.0.0.1:8031");

})