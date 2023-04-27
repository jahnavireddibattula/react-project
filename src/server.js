const express = require('express');
// const { MongoAPIError } = require('mongodb');
const app = express();
const mongoose=require("mongoose")
app.use(express.json())

//DB Connection
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/mynewdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected to db")
    } else{
        console.log("error")
    }
})


// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect("mongodb://localhost:27017/mynewdb")
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = connectDB

// schema
const sch={
    name:String,
    email:String,
    id:Number
}

const monmodel=mongoose.model("NEWCOL",sch);

//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");

    const data=new monmodel({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email
    });
    const val=await data.save();
    res.json(val);
})

// PUT (or) UPDATE
app.put("/update/:id",async(req,res)=>{
    let upid=req.params.id;
    let upname=req.body.name;
    let upemail=req.body.email;
    monmodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail}},
        {new:true},(err,data)=>{
            if(err){
                res.send("ERROR")
            } else{
            if(data==null){
                res.send("nothing found")
            } else {
                res.send(data)
            }
        }  
    })
})


//FETCH (or) GET
app.get('/fetch/:id',function(req,res){
    fetchid=req.params.id,
    monmodel.find(({id:fetchid}),function(err,val){
    if(err){
        res.send("ERROR")
    }else{
        if(val.length==0){
        res.send("data not exits");
        }else{
        res.send(val);
        }
    } 
    })
})

// DELETE
app.delete('/del/:id',function(req,res){
    let delid=req.params.id;
    monmodel.findOneAndDelete(({id:delid}),function(err,data){
        if(err){
            res.send("ERROR")
        }else{
            if(data==null){
                res.send("data already deleted")
            } else{
            res.send(data);
            }   
        }
    })
})

// app.post("/post")
app.listen(5000,()=>console.log('Server Running...'));