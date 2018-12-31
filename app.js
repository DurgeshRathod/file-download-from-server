// http://localhost:3000/download

var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
//**
var MimeLookup = require('mime-lookup');
var mime = new MimeLookup(require('mime-db'));
//**



var port =3000;
app.listen(port,()=>{
    console.log(`Server started: listening on port ${port}`);
});

app.get('/download',(req,res)=>{
    var file = __dirname+'/TextDataFile.txt';
    var filename = path.basename(file);
    var mimetype = mime.lookup(file);
    res.setHeader('Content-disposition','attachment; filename='+filename.toString());
    res.setHeader('Content-type',mimetype);
    // console.log('mimetype: '+mimetype)
    // console.log('filename: '+filename)
    fs.createReadStream(file).pipe(res);
});