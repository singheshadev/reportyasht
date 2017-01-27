var express = require('express');
var fs = require('fs');
var app=express();
var mongoose = require('mongoose');
var conn=require('./config2')
var Bear=require('./schema.js');
var imgPath = 'img.jpg';
mongoose.connect(conn.database);

app.get('/store',function(req,res){
    var bear=new Bear();

        bear.img.data=fs.readFileSync(imgPath);
        bear.img.contentType='image/jpg';
        bear.save(function(err,data){
            if(err)
            {
                console.log(err);
            }else{
                console.log(data);
                res.send({data:"file added"});

            }

        })

})
app.listen(conn.port);


