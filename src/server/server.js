const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const cors = require('cors');

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS proxy
app.use(cors());
app.options('*', cors());

app.get('/events', (req, res)=> {
  fs.readFile('../data/events.json', (err, data)=> {
    res.send(data);
  })
})

app.listen(3100, () => {
  console.log("Server works on 3100");
})