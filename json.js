module.exports = {
  name: "json",
  ns: "data",
  title: "JSON",
  description: "JSON",
  phrases: {
    active: "Creating JSON content"
  },
  ports: {
    input: {
      "in": {
        title: "JSON",
        type: "string",
        format: "json",
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
  fn: function json(input, output, state, done, cb, on) {
    var r = function() {
      output.out = JSON.parse(input.in)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}