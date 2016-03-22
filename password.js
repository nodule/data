module.exports = {
  name: "password",
  ns: "data",
  title: "Password",
  description: "Creates a password object",
  phrases: {
    active: "Creating password object"
  },
  ports: {
    input: {
      "in": {
        title: "Password",
        type: "string",
        format: "password",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "password"
      }
    }
  },
  fn: function password(input, $, output, state, done, cb, on) {
    var r = function() {
      /* simple prototype to distinct passwords from strings
       * Not to collect passwords, but to warn.. :)
       * */
      function password(pass) {
        this.pass = pass;
      };

      password.prototype.toString = function passwordToString() {
        return this.pass;
      };

      output.out = $.write('in', new password($.in));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}