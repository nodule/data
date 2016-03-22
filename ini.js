module.exports = {
  name: "ini",
  ns: "data",
  title: "ini",
  description: "ini",
  phrases: {
    active: "Creating ini content"
  },
  ports: {
    input: {
      "in": {
        title: "ini",
        type: "string",
        format: "ini",
        required: true
      }
    },
    output: {
      out: {
        title: "out",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      ini: require('ini')
    }
  },
  fn: function ini(input, $, output, state, done, cb, on, ini) {
    var r = function() {
      output.out = $.write('in', ini.parse($.in))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}