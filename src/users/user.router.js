const router = require("express").Router();
 const { getlogintokenRequest }= require("./user.controller");

router.post("/getlogintoken.json", getlogintokenRequest);


module.exports = router;
