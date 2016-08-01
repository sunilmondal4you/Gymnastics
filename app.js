/**
 * Created by abc on 21/07/2016.
 */
var express=require("express");
var bodyParser=require("body-parser");

var app=express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello ritesh!");
});

app.listen(3001,function () {
    console.log("Server 3001 is started");
});
