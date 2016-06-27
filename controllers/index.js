var path = require('path');

module.exports = function response(req, res) {
  res.sendFile(path.join(__dirname,'../','index.html'));
};
