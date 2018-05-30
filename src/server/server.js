const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');

const app = express();
app.use('api', (req,res)=> {
  req.pipe(request("http://localhost:3000/api" + req.url)).pipe(res);
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/events', (req, res)=> {
  fs.readFile('../data/events.json', (err, data)=> {
    res.send(data);
  })
})

app.listen(3100, () => {
  console.log("Server works on 3100");
})