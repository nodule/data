module.exports = {
  name: "xml",
  ns: "data",
  title: "XML",
  description: "XML",
  phrases: {
    active: "Creating XML content"
  },
  ports: {
    input: {
      "in": {
        title: "XML",
        type: "string",
        format: "xml",
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
  fn: function xml(input, $, output, state, done, cb, on) {
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