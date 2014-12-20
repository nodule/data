module.exports = {
  name: "sql",
  ns: "data",
  title: "SQL",
  description: "SQL",
  phrases: {
    active: "Creating SQL"
  },
  ports: {
    input: {
      "in": {
        title: "SQL",
        type: "string",
        format: "sql",
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
  fn: function sql(input, output, state, done, cb, on) {
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