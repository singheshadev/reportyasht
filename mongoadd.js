/**
 * Created by lcom23_one on 1/19/2017.
 */
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/test";

function mongoadd() {
    this.get=function(res) {
        MongoClient.connect(url, function (err, res) {
            if (err) {
                console.log(err);
            }
            else
            {
              res.collactio
            }
        })
    }
}