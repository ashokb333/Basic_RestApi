const request = require('request'); 
const checkToken  = require("../../auth/authentication");

const getCustomerByNumber = (mobileNumber,callback) => {
    request('http://35.198.199.255:8080/dmt/getcustomer/{mobileNumber}', "checkToken,", { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(JSON.parse(body));
    });
}

module.exports = getCustomerByNumber;