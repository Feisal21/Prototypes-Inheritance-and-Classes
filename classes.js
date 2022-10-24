//  this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.hobby = attributes.hobby;
  this.speak = function() {
    return  `Hello, My name is + ${this.name} + and I'm + ${this.age} + years old. I love + ${this.hobby}`
  }
}
const feisal = new Person ({
  name: 'feisal',
  age: 20,
  hobby: 'watching documentary'
})
console.log(feisal);
console.log(feisal.speak());
// Extend Person class and create one class for each member of your family.In