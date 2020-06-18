const getlogintokenRequest = require("./user.service");
const  compareSync   = require("bcrypt");
const  sign  = require("jsonwebtoken");

module.exports = {
    
    getlogintokenRequest: (req, res, next) => { 
      const body = req.body;
      getlogintoken(body.email, (err, results) => {   
        if (err) {
          console.log(err);
          return;
        }       
        if (results.length == 0) {
          return res.json({
            success: 0,
            message: "Invalid email or password"
          });
        }  
        const result = compareSync(body.password, results.password); 
        if (result) {
          results.password = undefined;
          const jsontoken = sign({ result: results }, "no1canhack", {
            expiresIn: "1h"
          });
          return res.json({ 
            token: jsontoken,
		      	admin: results.username // user's admin name
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    }
	
};