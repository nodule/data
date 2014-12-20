module.exports = {
  name: "css",
  ns: "data",
  title: "CSS",
  description: "CSS",
  phrases: {
    active: "Creating CSS"
  },
  ports: {
    input: {
      "in": {
        title: "CSS",
        type: "string",
        format: "css",
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
  fn: function css(input, output, state, done, cb, on) {
    var r = function() {
      output.out = input.in
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}