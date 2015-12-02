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

Polymorphism

var answer = {
  get: function() {
    return this.val
  },
  val: 42
}

var firmAnswer = Object.create(answer)
firmAnswer.get = function fn2() {
  return answer.get.call(this) + '!!'
}
Object.assign(firmAnswer, { val: 3.14 })

answer.get() // 42
firmAnswer.get() // '42!!'
