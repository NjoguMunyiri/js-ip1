var apiKey = require('./../.env').apiKey;


Account=function() {

Account.prototype.getRepos = function() {
  $.get('https://api.github.com/users/NjoguMunyiri?access_token='+apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
};
exports.accountModule = Account;
