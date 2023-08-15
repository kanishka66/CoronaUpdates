const express = require('express');
const app =express();

// app.get('/',(req, res)=>{
//     res.sendFile(__dirname + '/t3.html');
  //  res.send('Hello,World');
    // })
    app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname + '/style.css');
        
    })

    // app.get('/',(req, res)=>{
    //   res.send('<h1>hello motu</>');

 app.listen(8000,()=>{
        console.log('server is listening on port 80, http://localhost:8000');
    })