const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router();
router.use((req, res, next) =>{
  console.log('I need an adult');
  next();
});
app.use('/', express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
const port= process.env.PORT || 3000;

app.listen(port, () => console.log("Example app listening to port 3000!"));
