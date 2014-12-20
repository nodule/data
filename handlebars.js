module.exports = {
  name: "handlebars",
  ns: "data",
  title: "Handlebars",
  description: "Handlebars",
  phrases: {
    active: "Creating Handlebars template"
  },
  ports: {
    input: {
      "in": {
        title: "Handlebars",
        type: "string",
        format: "handlebars",
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
  fn: function handlebars(input, output, state, done, cb, on) {
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