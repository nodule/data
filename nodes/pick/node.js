on.input.in = function() {
  // dot_object api should be fixed..
  var res = dot_object().pick($.path, $.in);
  if(typeof res !== 'undefined') {
    output({out: $.write('in', res)});
  } else {
    output({error: $.create(Error($.path + ' not found'))});
  }
};
