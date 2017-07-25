var Account = require('./../js/backend.js').accountModule;

$(document).ready(function() {
  var currentAccObject = new Account();
  $('#submit').click(function() {
    var acc = $('#githubacc').val();
    $('#githubacc').val("");
    currentAccObject.getRepos(acc);
  });
});
