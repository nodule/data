module.exports = {
  name: "pick",
  ns: "data",
  title: "Pick",
  async: true,
  description: "Pick one value from an object",
  phrases: {
    active: "Picking {{input.path}} from object"
  },
  ports: {
    input: {
      "in": {
        title: "Object",
        description: "An Object, e.g { name: { first: 'John', last: 'Doe' } }",
        type: "object",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, dot_object) {
          var r = function() {
            // dot_object api should be fixed..
            var res = dot_object().pick($.path, $.in);
            if (typeof res !== 'undefined') {
              output({
                out: $.write('in', res)
              });
            } else {
              output({
                error: $.create(Error($.path + ' not found'))
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      path: {
        title: "Path",
        description: "Specify a path with . syntax (e.g. name.last )",
        type: "string",
        required: true
      }
    },
    output: {
      out: {
        title: "Output",
        type: "any"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  dependencies: {
    npm: {
      "dot-object": require('dot-object')
    }
  },
  state: {}
}