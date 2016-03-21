on.input.in = function() {
  output( { out: $.write('in', typeof $.in === null ? 'null' : $.in.toString()) });
};
