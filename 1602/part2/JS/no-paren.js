function greet() {
  console.log('hello');
}

// call the function without usual parentheses

greet.apply(this);

greet.call(this);

// or like, really without any parentheses!

//use the new constructor
new greet;

// pass it an empty template literal
greet``;
