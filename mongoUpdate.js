var MongoClient1=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";


function mongoUpdate() {
    this.get=function(res)
    {
        MongoClient1.connect(url,function(err,db){
            if(err){
                console.log(err);
            }
            else
            {
                db.collection('user').update({"name":"user4"},{$set:{"eid":"U4"}});
                res.send({"data":"modified"});
            }
        })
    }

}
module.exports=new mongoUpdate();