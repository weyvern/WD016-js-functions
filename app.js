// Function declaration: named function
function sayHello() {
  // logic
  return 'Hello';
}
const greeting = sayHello();
console.log(greeting);

// Anonymous functions
// As callbacks
/* document.querySelector('body').addEventListener('click', () => console.log('clicked')); */
// Callback what?
function a(fn) {
  // Other logic
  fn();
}

function b() {
  console.log("I'm a callback function");
}

a(b);
// Function assignment: anonymous functions
const sayHello2 = function (name = 'Stranger', pokemon) {
  // logic
  return `Hello ${name}, how do you like your ${pokemon}?`;
};
console.log(sayHello2('Pikachu'));

// Passing an object as param
/* function hi(obj) {
  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

hi({ cellphone: 'ddeded', name: 'Jorge' }); */

// Arrow functions
const sayHelloButArrow = name => console.log(name);
console.log(sayHelloButArrow('Jorge'));

// Lexical scope
// ES5
document.querySelector('body').addEventListener('click', function () {
  console.log('clicked ES5', this);
});
// ES6
document.querySelector('body').addEventListener('click', () => console.log('clicked ES6', this));

// recursive function: factorial

const factorial = function (number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// 3 * factorial(2)
// 2 * factorial(1)
// 1 * factorial(0)
// 1

console.log(factorial(3));
