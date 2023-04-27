var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");
// const { response } = require("express");

var connectionString = "mongodb://localhost:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.get("/", (request,response)=>{
    response.send("<h2>API HOME</h2>")
});

// app.get("/users",(request,response)=>{
    // mongoClient.connect(connectionString,(err, clientObject)=>{
    //     if(!err){
    //         var database = clientObject.db("shopper");
    //         database.collection("users").find({}).toArrary((err,document)=>{
    //             if(!err){
    //                 response.send(document);
    //             }
    //         })
    //     }
    // })

app.get("/users",(request,response)=>{
    mongoClient.connect(connectionString).then((clientObject)=>{
        var database = clientObject.db("shopper");
        database.collection("users").find({}).toArray().then((documents)=>{
            response.send(documents);
        })
    })
});


app.post("/registeruser",(request,response)=>{
    var user = {
        "UserId" : request.body.UserId,
        "UserName" : request.body.UserName,
        "Password" : request.body.Password,
        "Email" : request.body.Email,
        "Age" : parseInt(request.body.Age),
        "Mobile" : request.body.Mobile
    }
    mongoClient.connect(connectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        database.collection("users").insertOne(user).then(result=>{
            console.log("Record Inserted");
            response.redirect("/users");
        })
    })
});

app.listen(5000);
console.log("Server Started : http://127.0.0.1:5000")