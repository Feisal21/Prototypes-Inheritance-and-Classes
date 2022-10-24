/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 
1: Window/Global Object Binding

If the this keyword is not resolved with any of the bindings, implicit, explicit or new, then the this is bound to the window(global) object.
There is one exception though. JavaScript strict mode does not allow this default binding.
* 2. Implicit Binding
When we invoke a method of an object, we use the dot(.) notation to access it. 
In implicit binding, you need to check the object adjacent to the method at the
 invocation time. This determines what this is binding to.
* 3. New binding
When a function is invoked with the new keyword, JavaScript creates an internal this object(like, this = {}) within the function. The newly created this binds to the object being created using the new keyword.
* 4. Explicit binding
In explicit binding, we can call a function with an object when the function is outside of the execution context of the object.

There are three very special methods, call(), apply() and bind() that help us achieve explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1
let sayName = function(name) {
  console.log(this.name);
};

window.name = 'Tapas';
sayName();
"use strict";
function myFunction() {
  return this;
}

// code example for Window Binding


// Principle 2
let blog = {
  name: 'Tapas',
  address: 'freecodecamp',
  message: function() {
      console.log(`${this.name} blogs on ${this.address}`);
  }
};

blog.message();
// Support our nonprofit and our mission. Donate to freeCodeCamp.org.

/
#JAVASCRIPT
The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners
TAPAS ADHIKARY
TAPAS ADHIKARY
The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners
JavaScript's this keyword is one of the hardest aspects of the language to grasp. But it is critically important for writing more advanced JavaScript code.

In JavaScript, the this keyword allows us to:

Reuse functions in different execution contexts. It means, a function once defined can be invoked for different objects using the this keyword.
Identifying the object in the current execution context when we invoke a method.
The this keyword is very closely associated with JavaScript functions. When it comes to this, the fundamental thing is to understand where a function is invoked. Because we don't know what is in the this keyword until the function is invoked.

The usage of this can be categorized into five different binding aspects. In this article, we will learn about all five aspects with examples.

First, What is Binding?
In JavaScript, a Lexical Environment is where your code is physically written. In the example below, the variable name is lexically inside the function sayName().

function sayName() {
  let name = 'someName';
  console.log('The name is, ', name);
 }
An Execution Context refers to the code that is currently running and everything else that helps run it. There can be lots of lexical environments available but the one that's currently running is managed by the Execution Context.

lexical
Lexical Environment vs Execution Context
Each of the Execution Context contains an Environment Record. As JavaScript engine executes the code, variables and function names gets added to the Environment Record.

This phenomenon is known as Binding in JavaScript. Binding helps associate the identifiers(variables, function names) with the this keyword for an execution context.

Don't worry if you find this a bit hard to understand now. You will get a better grasp as we proceed.

Rule #1: How JavaScript Implicit Binding Works
Implicit binding covers most of the use-cases for dealing with the this keyword.

When we invoke a method of an object, we use the dot(.) notation to access it. In implicit binding, you need to check the object adjacent to the method at the invocation time. This determines what this is binding to.

Let's look at an example to understand it better.

let blog = {
    name: 'Tapas',
    address: 'freecodecamp',
    message: function() {
        console.log(`${this.name} blogs on ${this.address}`);
    }
};

blog.message();
// Here this is bound to the blog object. We know this because we invoke the method message() on the blog object. So this.name is going to log Tapas and this.address is going to log  freeCodeCamp in the console.

// Let's see another example to better understand this concept:

 function greeting(obj) {
      obj.logMessage = function() {
          console.log(`${this.name} is ${this.age} years old!`);
      }
  };

  const tom = {
      name: 'Tom',
      age: 7
  };

  const jerry = {
      name: 'jerry',
      age: 3
  };

  greeting(tom);
  greeting(jerry);

  tom.logMessage ();
  jerry.logMessage ();
// code example for Implicit Binding

// Principle 3
let Cartoon = function(name, character) {
  this.name = name;
  this.character = character;
  this.log = function() {
      console.log(this.name +  ' is a ' + this.character);
  }
};
// code example for New Binding

// Principle 4
let getName = function() {
  console.log(this.name);
}

let user = {
name: 'Tapas',
address: 'Freecodecamp'  
};

getName.call(user);
// code example for Explicit Binding