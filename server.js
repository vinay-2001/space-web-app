const exp = require('express');
const app = exp();
require('dotenv').config();
const dburl = process.env.DATABASE_CONNECTION_URL;
const cors=require("cors")
const x = require("mongodb").MongoClient;
const path=require("path");
app.use(exp.static(path.join(__dirname,"./build")))
app.use(exp.json())
app.use(cors())
x.connect(dburl)
    .then((client) => {
        let dbobj = client.db("infospace");
        let usercollectionobj = dbobj.collection("usercollectionobject")
        app.set("usercollectionobj",usercollectionobj)
        console.log('database connection success');
    })
    .catch(err => console.log('error in db connection', err))
const { response } = require("express");
const userApp = require("./userApi");
app.use('/user-api', userApp);
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'));
});
app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` });
});
const port=process.env.PORT;
app.listen(port, () => console.log("server listening on port 4000"));

