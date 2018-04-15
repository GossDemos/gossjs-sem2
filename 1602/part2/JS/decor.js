const logged = function(f) {
  return function() {
    console.log(arguments[0]);
    return f.apply(this, arguments);
  };
};

const q = x => x * x;

logged(q)(2);
