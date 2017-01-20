/**
 * Created by lcom23_one on 1/20/2017.
 */
var MongoClient1=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";

function mondel() {
    this.get=function(res){MongoClient1.connect(url,function(err,db){
        if(err)
        {
            console.log(err);
        }
        else
        {
            db.collection('user').remove({"eid":"u5"});
            res.send({"data":"deleted"});
        }
    })

}
}
module.exports=new mondel();