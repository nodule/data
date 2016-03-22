module.exports = {
  name: "boolean",
  ns: "data",
  title: "Boolean",
  description: "Boolean",
  phrases: {
    active: "Creating boolean value {input.boolean}"
  },
  ports: {
    input: {
      "in": {
        title: "Boolean",
        type: "boolean",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "boolean"
      }
    }
  },
  fn: function _boolean(input, $, output, state, done, cb, on) {
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