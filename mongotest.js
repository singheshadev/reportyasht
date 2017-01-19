/**
 * Created by lcom23_one on 1/19/2017.
 */
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";




    //Write databse Insert/Update/Query code here..



function mongotest()
{
    this.get=function(res)
    {
        MongoClient.connect(url,function(err,db)
        {
             if(err){console.log("conncetion pro"+err)}else{
            db.collection('user').find().toArray(function(err,data){
                if(err){console.log("abcddfhfskdfgk1111  "+err);}
                else
                {
                    console.log(data);
                    res.send(data);
                }
            });}
        })
    }
}
module.exports = new mongotest();