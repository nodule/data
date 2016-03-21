/* simple prototype to distinct passwords from strings
 * Not to collect passwords, but to warn.. :)
 * */
function password(pass) {
  this.pass = pass;
};

password.prototype.toString = function passwordToString() {
  return this.pass;
};

output.out = new password($.in);
