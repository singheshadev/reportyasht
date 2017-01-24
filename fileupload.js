var express = require('express');
var fileUpload = require('express-fileupload');
var fs=require('fs');
var app = express();
var sampleFile;
var data="<html><body><img src ='";
// default options 
app.use(fileUpload());

app.post('/upload', function(req, res) {


    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('img.jpg', function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {mkfile();
            res.sendFile(__dirname+"/"+"output.html");
        }
    });
});

function mkfile()
{
    var writerStream = fs.createWriteStream('output.html');

   data=data+"img.jpg'></body></html>";
    writerStream.write(data,'UTF8');


    writerStream.end();


    writerStream.on('finish', function() {
        console.log("Write completed.");
    });

    writerStream.on('error', function(err){
        console.log(err.stack);
    });
}
app.listen(8085);