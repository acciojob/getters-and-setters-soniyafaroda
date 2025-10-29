class Person {
  constructor(name, age) {
    this._name = name; // private-style variable (by convention)
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}
// Subclass: Student (inherits from Person)
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher (inherits from Person)
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
// --------------------------
//  Example usage and output
// --------------------------

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching






















//complete this code
class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = person()
window.student= Student ()
window.teacher= teacher ()