const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const routerapi = require("./routes");
const bodyParser = require("body-parser");

const bcrypt = require('bcrypt');
const client = require('./databse');


app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.use(routerapi); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})