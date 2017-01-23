var express    = require('express');
// call express
var app        = express();
// define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Bear =require('./bear.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// create a bear (accessed at POST http://localhost:8080/api/bears)

 app.get('/sort',function(req,res){
     Bear.find().sort({"age":1});
     res.send({data: "sorted"});
     console.log(data);

 });
  app.post('/add',function(req, res) {

        var bear = new Bear();
      // create a new instance of the Bear model
        bear.name = req.body.name;
      // set the bears name (comes from the request)
        bear.age=req.body.age;
        // save the bear and check for errors
       Bear.find({"age":req.body.age,"name":req.body.name},function(err,data)
       {
           if(err){}
           else
           {
               if(data.length>0){
                   res.send({data:"Allready exist"});
               }
               else{addd();}
           }
       });
       function addd(){ bear.save(function(err,data) {
            if (err) {
                res.send(err);}
                else
            {
                res.send(data);
            }


        });}

    });



  app.post('/delete',function(req,res)
  {
      Bear.find({"age":req.body.age,"name":req.body.name},function(err,data){
          if(err)
          {

          }
          else
              {
              if(data.length>0)
              {
                  rmv();
              }
              else{res.send({data:"notfound"});}
          }
      })



      function rmv() {
          Bear.remove({"age": req.body.age}, function (err, data)
          {
              if (err)
              {
                  res.send(err);
              }
              else
                  {
                  res.send(data);
              }

          });
      }
  });



app.post('/update',function (req,res)
{
    Bear.find({"age":req.body.age},function(err,data)
    {
        if(err){}
        else
        {
            if(data.length>0){
                goupdate();

            }
            else
            {
                res.send({data:"does not exist"});
            }
        }
    })



   function goupdate(){ Bear.update({"age":req.body.age},{$set:{"name":"abcdefg",}},function (err,data)
   {
     if(err)
     {
         res.send(err);
     }
     else
     {
         res.send(data);
     }
    })}


})
app.get('/disp',function (req,res)
{
    Bear.find(function (err,data)
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(data);
        }

    })
})


var port = process.env.PORT || 8088;


app.get('/api', function(req, res)
{
    res.json({ message: 'hooray! welcome to our api!' });
});




app.listen(port);
console.log('Magic happens on port ' + port);