// Modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongotest=require('./mongotest.js');

// END modules

var app = express();
var server = require('http').Server(app);
var sql = require('./index');


//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//end middleware

var sess;
// define routes
app.get('/fetch',function (req,res) {
    var p="SELECT * FROM list where username='"+req.query.username+"'";
    console.log("abcd"+p);
    sql.executeSql("SELECT * FROM list where username='"+req.query.username+"'" ,function (err, data) {console.log(data[0].name);
      if(err){
          return res.send({error: err});
      }
      return res.send({data: data});
    })
});


app.post('/delete',function (req,res){
   sql.executeSql("DELETE FROM list WHERE username = '"+req.body.uname+"' AND password = '"+req.body.pwd+"'",function(err,data){
       if(err){}
       return res.send({data:data});
        })
}

);
/*app.post('/login', function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send({message: 'welcome, ' + req.body.id})
});*/

app.get('/mong',function (req,res) {
    mongotest.get(res);

})
app.get('/mongadd',function (req,res) {


})
app.post('/test11', function(req, res) {

    query = "select * from list where username = '"+req.body.username+"'";
    console.log(query);
    sql.executeSql(query,function (err,data) {
       if(err){
           return res.send({error: err});
       }else if(data.length > 0){
           res.send({Message : "Username already taken!!"});
       }else{
           query = "insert into list (name,surname,username,password) values('"+ req.body.name +"','"+req.body.surname+"','"+req.body.username+"','"+req.body.password+"')";
           console.log(query);
           sql.executeSql(query, function (err, data) {
               if(err){
                   return res.send({error: err});
               }
               return res.send({data : data});
           })
       }
    });
});

app.post('/update', function(req, res) {console.log(req.body.name+"aaaa "+req.body.uname);
    sql.executeSql("update list set name='"+req.body.name+"' where username= '"+ req.body.uname +"'AND password='"+req.body.pwd+" '", function (err, data) {
        if(err){
            return res.send({error: err});
        }
        return res.send({data : data});
    })
});

app.get('/test12',function (req,res) {
     //res.redirect('../../www.google.com');
    /*console.log("Received data: ", req.query);

    query = "delete from list where username='"+req.query.username+"'";
    console.log(query);
    sql.executeSql(query,function (err,data) {
        if(err){
            return res.send({error: err});
        }
        return res.send({data : data});
    })*/
});
app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'/about.html'))
});

app.post('/login',function (req,res) {
    query = "select password from list where username='"+req.body.username+"'";
    console.log(query);
    sql.executeSql(query,function (err,data) {
        if(err){
            return res.send({error : err})
        }
        else
        {
            if(data[0].password == req.body.password)
            {

                console.log("Success");
                res.sendFile(path.join(__dirname,'/login.html'));
            }
        }
    });

});


//end routes

var server = app.listen(8031, function () {


    console.log("Example app listening at http://127.0.0.1:8031");

})
