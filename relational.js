var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reldb');

var Users=require('./users.js');
var Posts=require('./posts.js');


var alex=new Users({name:"alex"});

alex.save();


var post=new Posts({
    title:"hello world",
    postedBy:alex._id
})
post.save(function(error)
{
    if(!error){
        Posts.find({})
            .populate('postedBy')
        .exec(function(error,posts){console.log(JSON.stringify(posts,null,"\t"))})
    }
});