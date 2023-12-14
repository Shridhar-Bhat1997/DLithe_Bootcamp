// javascript functions

// Named function 
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Calling the named function
  let message = greet('John');
  console.log(message); 

  // here name is the parameter which is a varaible in function definition which is
  // used to define what kind of info the function is going to accept.

  // John is argument which is a actual value that is passed to function when you are calling it.

  console.log("-------------------------------------------------");

  // anonymous function

  let add = function (a, b) {
    return a + b;
  };
  
  console.log(add(3, 5)); 

  console.log("----------------------------------------------------");

  // Immediately invoked function expression (IIFE)

  (function() {
    console.log("This is an IIFE!");
  })();

  console.log("------------------------------------------------------");

  // Arrow functions
 let multiply = (a, b) => a * b;
 console.log(multiply(5, 3)); 



  

  


  