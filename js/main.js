var  users =[];

var addUser = function() {
  var firstName = $('#firstName').val(),
      lastName =  $('#lastName').val(),
      email = $('#emailAddress').val(),
      currentIndex,
      userObj = {},
      userID = Math.random();

  userObj.fristName = firstName;
  userObj.lastName = lastName;
  userObj.email = email;
  userObj.userID = userID;
  users.push(userObj);
  currentIndex = users.indexOf(userObj);

  // Adding user in table

  var tableBody = $('#tBody');
  var trObj = '<tr class="user-data" data-userID='+userID+'><td>'+firstName+'</td>';
  trObj += '<td>'+lastName+'</td>';
  trObj += '<td>'+email+'</td>';

  trObj += '<td class="role"></td>';
  trObj += '<td > <select class="changeRole"><option value="preparer">preparer</option><option value="reviewer">reviewer</option></select>  <button class="btn btn-primary" onClick="assignRole('+currentIndex+','+userID+')">Assign Role</button></td>';
  trObj += '<td><button class="btn btn-primary" onClick="deleteUser('+currentIndex+','+userID+')">Delete</button></td></tr>';
  $(tableBody).append(trObj);
};


var deleteUser = function(deleteIndex, userID) {
  $('*[data-userID="'+userID+'"]').remove();
  users.splice(deleteIndex, 1);
};

var assignRole = function(deleteIndex, userID) {
  var roleValue = $('*[data-userID="'+userID+'"] select.changeRole').val();
  $('*[data-userID="'+userID+'"] td.role').html(roleValue)
  //users.splice(deleteIndex, 1);

};
