module.exports = {
  name: "markdown",
  ns: "data",
  title: "Markdown",
  description: "Markdown",
  phrases: {
    active: "Creating Markdown template"
  },
  ports: {
    input: {
      "in": {
        markdown: {
          title: "Markdown",
          type: "string",
          format: "markdown",
          required: true
        }
      }
    },
    output: {
      out: {
        title: "out",
        type: "string"
      }
    }
  },
  fn: function markdown(input, output, state, done, cb, on) {
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