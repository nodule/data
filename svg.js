module.exports = {
  name: "svg",
  ns: "data",
  title: "SVG",
  description: "SVG",
  phrases: {
    active: "Creating SVG content"
  },
  ports: {
    input: {
      "in": {
        title: "SVG",
        type: "string",
        format: "svg",
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
  fn: function svg(input, output, state, done, cb, on) {
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