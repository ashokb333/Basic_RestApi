const express = require("express");
const bodyParser = require("body-parser"); 
const userRouter = require("./src/users/user.router"); 
const custRouter = require("./src/customer/cust.router"); 

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req,res) => {
  res.send("This Api Running for iserveU.... ")
});

app.use("http://35.198.199.255:8080", userRouter); 
app.use("http://35.198.199.255:8080/dmt", custRouter); 

  
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});