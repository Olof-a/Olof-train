
var mongodb = require('mongodb').MongoClient;
var db_str = "mongodb://localhost:27017/user"


mongodb.connect(db_str,(err,database)=>{
    database.collection('info',(err,coll)=>{
        coll.save({name:'数据库',price:20},()=>{
            console.log("ok");
            database.close();
        })
    })
})
