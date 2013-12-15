var arg1 = require('../');
var test = require('tape');

test('readme examples', function (t) {
  t.plan(2);

  t.deepEqual(
    ['123','456'].map(arg1(parseInt)),
    [ 123, 456 ]
  );

  var regex = /txt/;
  t.deepEqual(
    [ 'abc','aatxt'].filter(arg1(regex.test,regex)),
    [ 'aatxt' ]
  );
});
