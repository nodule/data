module.exports = {
  name: "jade",
  ns: "data",
  title: "Jade",
  description: "Jade",
  phrases: {
    active: "Creating Jade template"
  },
  ports: {
    input: {
      "in": {
        title: "Jade",
        type: "string",
        format: "jade",
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
  fn: function jade(input, output, state, done, cb, on) {
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