module.exports = {
  name: "number",
  ns: "data",
  title: "Number",
  description: "Number",
  phrases: {
    active: "Creating Number {{input.number}}"
  },
  ports: {
    input: {
      "in": {
        title: "Number",
        type: "number",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "number"
      }
    }
  },
  fn: function number(input, $, output, state, done, cb, on) {
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