var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var conn=require('./config.js');
var Data1=require('./schema.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Connect to database
mongoose.connect(conn.database);
//To Add records
app.post('/add',function(req,res){
    var data1=new Data1;
    data1.name=req.body.fname;
    data1.email=req.body.email;
    data1.password=req.body.pwd;
    data1.save(function(err,data)
    {
        if(err){
            console.log(err);
        }
        else
        {
            res.send({data:"saved"});
        }
    })
});
//To delete record
app.post('/delete',function (req,res) {
    Data1.find({"email":req.body.demail},function(err,data){    //checks whether email exist or not
        if(err)
        {res.send(err);
        }
        else
        {
            if(data.length>0)
            {
                removedata(); //if email exist  removedata() function will delete the data
            }
            else
            {
                res.send({data:"Dont exist!!Enter valid email"});  //if entered email dont exist in database
            }
        }
    });
    function removedata()
    {
       Data1.remove({"email":req.body.demail},function (err,data) {
           if(err)
           {
               res.send(err);
           }
           else
           {
               res.send({data:"deleted"});//if data is successfully deleted
           }
       });
    }
});
//Display all existing records in database name "data1"
app.get('/display',function (req,res) {
    Data1.find({},{__v:0,_id:0},function (err,data) {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(data);//send all the data to the end users page in JSON format
        }
    })

});
// Update/Modify the records from data1 db
app.post('/update',function (req,res) {
    Data1.find({"email":req.body.uemail},function(err,data){
        if(err){
            res.send(err);
        }
        else
        {  if(data.length>0){
            updaterec();}// updaterec() function updates the record if entered email address exist in database
            else{
              res.send({data:"Entered email address dont exist"});
            }
        }
    });
    function updaterec(){
        Data1.update({"email":req.body.uemail},{$set:{"name":req.body.uname,"password":req.body.upwd}},function (err,data) {
            if(err)
            {
                res.send(err);
            }
            else
            {
                res.send({data:"data modified"});//after successfully updating the data acknowledgement is sent to end user's screen
            }
        })
    }
});
app.listen(conn.port);
