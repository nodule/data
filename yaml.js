module.exports = {
  name: "yaml",
  ns: "data",
  title: "YAML",
  description: "yaml",
  phrases: {
    active: "Creating YAML content"
  },
  ports: {
    input: {
      "in": {
        title: "yaml",
        type: "string",
        format: "yaml",
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
  dependencies: {
    npm: {
      yaml: "0.x.x"
    }
  },
  fn: function yaml(input, output, state, done, cb, on, yaml) {
    var r = function() {
      output.out = yaml.eval(input.in)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}