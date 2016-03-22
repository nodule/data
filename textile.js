module.exports = {
  name: "textile",
  ns: "data",
  title: "Textile",
  description: "Textile",
  phrases: {
    active: "Creating Textile content"
  },
  ports: {
    input: {
      "in": {
        title: "Textile",
        type: "string",
        format: "textile",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "string"
      }
    }
  },
  fn: function textile(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.get('in')
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}