// Import stylesheets
import './style.css';

// Iterables and iterators in JavaScript
// ***************************************

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        } else return { value: undefined, done: true };
      },
    };

    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

//Hello
//World

// Javascript generators
// ************************

function normalFunction() {
  console.log('Hello');
  console.log('World');
}

normalFunction();
normalFunction();

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const generatorObject = generatorFunction();

for (const word of generatorObject) {
  console.log('Generator: ' + word);
}

//Generator: Hello
//Generator: World
