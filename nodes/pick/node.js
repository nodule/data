on.input.in = function(data) {
  // dot_object api should be fixed..
  var res = dot_object().pick(input.path, data);
  if(typeof res !== 'undefined') {
    output({out: res});
  } else {
    output({error: Error(input.path + ' not found')});
  }
};
