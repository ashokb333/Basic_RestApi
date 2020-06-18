const getCustomerByNumber = require("./cust.service");

module.exports = {
     
    getCustomerByNumber: (req, res) => { 
      const mobileNumber = req.params.mobileNumber;
      getCustomerByNumber(mobileNumber, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }       
        if (results.length == 0) {
          return res.json({
            status: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
        status: 1,
		customerId: results.customerId,
		mobileNumber: results.mobileNumber,
		name: results.customerName,
		statusDesc: results.statusDesc,
		balanceLimitPipe1: results.balanceLimitPipe1,
		balanceLimitPipe2: results.balanceLimitPipe2,
		balanceLimitPipe3: results.balanceLimitPipe3,
        gateWayList: results.gateWayList
      });
      });
    } 
};