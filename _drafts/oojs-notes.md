# message passing in javascript
Primitives are pass by value.
Objects are pass by reference.

thus,

var num1, num2;

num1 = 3
num2 = num1

num2 = 42
num1 === 3 // true

but,

var obj1, obj2;

obj1 = { a: 3 }
obj2 = obj1
obj2.a = 42
obj1.a === 3 // false

# Polymorphism
How to get a child class to do something different for the same function

var parent = {
  get: function() {
    return this.val
  },
  val: 42
}

var child = Object.create(parent)
child.get = function fn2() {
  return parent.get.call(this) + '!!'
}
Object.assign(child, { val: 3.14 })

parent.get() // 42
child.get() // '42!!'

# seperate functions from data

you put functions into a prototype. And have multiple objects extend that prototype
to give us special values.

var AnswerPrototype = {
	constructor: function fn0(value) {
		this._val = value;
	},
  get: function fn1() {
    return this._val;
  }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get() // 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
dessertAnswer.get() // 3.14

we then typically call the prototypes with functions *classes* and the objects
that extend them *instances*
utilizing a constructor function for our prototype allows us to leverage
encapsulation of the _val variable

# using the new keyword
function Answer(value) {
	this._val = value;
}
Answer.prototype.get = function fn1() {
	return this._val;
};
var lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

var dessertAnswer = new Answer(3.14);
dessertAnswer.get(); // 3.14

function FirmAnswer(value) {
	Answer.call(this.value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);


