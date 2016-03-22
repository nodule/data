module.exports = {
  name: "string",
  ns: "data",
  title: "String",
  async: true,
  description: "String",
  phrases: {
    active: "Creating string {{input.string}}"
  },
  ports: {
    input: {
      "in": {
        title: "String",
        type: "any",
        async: true,
        required: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: $.write('in', typeof $.in === null ? 'null' : $.in.toString())
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "out",
        type: "string"
      }
    }
  },
  state: {}
}