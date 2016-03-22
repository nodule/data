module.exports = {
  name: "haml",
  ns: "data",
  title: "HAML",
  description: "haml",
  phrases: {
    active: "Creating HAML"
  },
  ports: {
    input: {
      "in": {
        title: "haml",
        type: "string",
        format: "haml",
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
  fn: function haml(input, $, output, state, done, cb, on) {
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