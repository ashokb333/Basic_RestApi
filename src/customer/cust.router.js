const router = require("express").Router();
const { checkToken  }= require("../../auth/authentication");
const { getCustomerByNumber } = require("./cust.controller");

router.post("/getcustomer/:mobileNumber", checkToken, getCustomerByNumber);


module.exports = router;
