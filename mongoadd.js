/**
 * Created by lcom23_one on 1/19/2017.
 */
var MongoClient1=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";

function mongoadd() {
    this.get=function(res) {
        MongoClient1.connect(url, function (err, db) {
            if (err) {
                console.log(err);
            }
            else
            {
              db.collection('user').insert({
                  "name":"user4","eid":"u4","number":"00012"

              });
                res.send({message : "user successfully registered"});
            }
        })
    }
}
module.exports = new mongoadd();