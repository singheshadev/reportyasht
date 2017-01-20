var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Bear =require('./bear.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// create a bear (accessed at POST http://localhost:8080/api/bears)
  app.post('/add',function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)
        bear.age=req.body.age;
        // save the bear and check for errors
        bear.save(function(err,data) {
            if (err) {
                res.send(err);}
                else
            {
                res.send(data);
            }


        });

    });

  app.post('/delete',function(req,res){
      Bear.remove({"age":req.body.age},function (err,data) {
          if(err){
              res.send(err);
          }
          else
          {
              res.send(data);
          }

      });
  });
app.post('/update',function (req,res) {
    Bear.update({"age":req.body.age},{$set:{"name":"abcdefg",}},function (err,data) {
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
app.get('/disp',function (req,res) {
    Bear.find(function (err,data) {
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


var port = process.env.PORT || 8080;


app.get('/api', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});




app.listen(port);
console.log('Magic happens on port ' + port);