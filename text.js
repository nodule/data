module.exports = {
  name: "text",
  ns: "data",
  title: "Text",
  description: "Text",
  phrases: {
    active: "Creating Text"
  },
  ports: {
    input: {
      "in": {
        title: "Text",
        type: "string",
        format: "text",
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
  fn: function text(input, $, output, state, done, cb, on) {
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