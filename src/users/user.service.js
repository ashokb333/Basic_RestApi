const request = require('request'); 

_EXTERNAL_URL = 'http://35.198.199.255:8080/getlogintoken.json';

const getlogintoken = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     return callback(JSON.parse(body));
    });
} 
module.exports = getlogintoken;