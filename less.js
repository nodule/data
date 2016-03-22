module.exports = {
  name: "less",
  ns: "data",
  title: "LESS",
  description: "LESS",
  phrases: {
    active: "Creating LESS content"
  },
  ports: {
    input: {
      "in": {
        title: "LESS",
        type: "string",
        format: "less",
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
  fn: function less(input, $, output, state, done, cb, on) {
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