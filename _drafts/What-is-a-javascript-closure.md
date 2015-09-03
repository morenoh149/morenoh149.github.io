Hey Harry, I was asked a while back to explain a closure to someone that had no
prior experience with Javascript.  This is a very good question to think about
and let sink in.  My response to that question is below.  As always, let me know
if you have any questions.

###################################

Step 1:  How can you create a closure?

Short answer: A closure is an inner function that has access to variables from
outer scopes because they store references of its variables.  This is possible
because each closure stores the code within its scope. Let's see how to create
one in an example.

1. The variable x has created a closure.
2. The inner function has access to the outer functions variables.  This is also
a great example of currying.
3. It is not necessary to use higher order functions, we could have just created
an inner function without returning it.
4. Also an example of pass by reference and pass by value from outside of the
closure.  NOTE: Primitives & Objects are pass by reference if they are contained
within the closure.  There is an example of this at the end.

```
var x = function (primitive, object) {
    return function (inner) {
        primitive = "CHANGED";
        object.primitive = "CHANGED";
        console.log(primitive + " - " + inner);
        console.log(object.primitive + " - " + inner);
    };
}

var primitive = "UNCHANGED";
var object = {primitive : "UNCHANGED"};
var inner = "INNER VALUE";
x(primitive, object)(inner);

console.log(primitive + " - " + inner);                //Primitive is passed by value
console.log(object.primitive + " - " + inner);      //Object is passed by reference

// HERE IS THE OUTPUT OF THE ABOVE CODE
CHANGED - INNER VALUE
CHANGED - INNER VALUE
UNCHANGED - INNER VALUE
CHANGED - INNER VALUE
```

Step 2:  Which scopes will be included?

Three different scopes are included in a closure.  Therefore,  variables from each scope are accessible (this is where variable hoisting comes into play).
   1. Variables within the function.
   2. Variables within its containing functions.
   3. Variables from the global object.


Step 3:  So... who cares!!  How does this help me?

The real benefit here is that they allow us the ability to encapsulate functionality and data within a scope without the need to redefine within each inner scope.  This is especially beneficial when you consider the asynchronous functionality which necessitates non-blocking functionality.  I can use an inner function that will be executed on another pass of the event queue and I can utilize the variables from my current scope simply by binding them to my function.


Step 4: Variables within the closure (even primitives) are passed by reference.

//Using Immediately Invoked Function Expression (IIFE) to create a single closure to explain this point.
var x = (function (primitive, object) {
    var scope = "UNCHANGED";
    return function () {
        return {
            setScope: function () {
                scope = "CHANGED";
            },
            getScope: function () {
                return scope;
            }
        }
    };
})();

var innerObj = x();
console.log(innerObj.getScope());
innerObj.setScope();
console.log(innerObj.getScope());

// HERE IS THE OUTPUT OF THE ABOVE CODE
UNCHANGED
CHANGED

A question commonly asked at JS interviews is...

What does this print?
function foo() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
