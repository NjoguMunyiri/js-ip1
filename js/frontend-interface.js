var Account = require('./../js/backend.js').accountModule;

$(document).ready(function() {
  var currentAccObject = new Account();
  $('#submit').click(function() {
    var username = $('#githubacc').val();
    $('#githubacc').val("");
    currentAccObject.getRepos(acc);
  });
});
