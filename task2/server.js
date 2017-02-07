var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var fs = require("fs");
var User = require("./logdatabase.js");
var multer  = require('multer');
var app = express();

var server = require('http').Server(app);

var cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdata');

app.use(express.static('public'));
app.use('/static', express.static('uploads'));

app.get("/getData/:id",function (req, res) {

    User.find({"_id" : req.params.id},(function (err,data)
        {
            if(err){
                res.send(err);
            }
            else {
                res.send(data);
            }
        })
    );
});
var filename;

var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, './public/uploads/')

    },

    filename: function (req, file, cb) {

        filename=Date.now()+'.jpg';

        cb(null, filename );
    }

});
var upload = multer({ storage: storage });

app.post('/multer', upload.single('file'));
app.post("/updateData/:id",function (req, res) {

    User.update({"_id":req.params.id},{$set:{"name":req.body.name}},function (err,data) {
        if(err){console.log(req.params.id+"hhhhhh");
            res.send(err);
        }
        else{console.log("done");console.log(req.body.name+"cc");
            res.send(data);
        }
    });
});

app.post('/auth',function(req,res){
    User.find({"username":req.body.username,"password":req.body.password},function(err,data){
        if(err){

        }
        else
        {
            if(data.length>0){
                res.send("true");
            }
            else
            {
                res.send("false");
            }
        }
    })
});
app.get("/displayData",function (req, res) {

    User.find({},(function (err,data)
        {
            if(err){
                res.send(err);
            }
            else {
            // console.log(data);
                res.send(data);

            }
        })
    );
});
app.post('/auth1',function(req,res){
    User.find({"username":req.body.username,"password":req.body.password},function(err,data){
        if(err){

        }
        else
        {
            res.send(data);
        }
    })
});
app.post('/register',function(req,res){
    var user=new User();
    user.name=req.body.name;
    user.username=req.body.username;
    user.city=req.body.city;
    user.email=req.body.email;
    user.password=req.body.password;
    user.filename=filename;
    console.log(filename+" file");

    user.save(function(err,data){
        if(!err){
            console.log("saved");
        }
    })
});
app.delete("/deleteData/:id",function (req, res) {

    User.remove({"_id":req.params.id},function (err,data) {
        if(err){
            res.send(err);
        }
        else{
            console.log("data deleted"+req.params.id+"jhgvjh");
            res.send(data);
        }
    });
});
var server = app.listen(8086,function () {

    console.log("localhost ",8086);
});
