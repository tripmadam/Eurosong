import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//ES5
/* var firstname = "Stef"
var name = "Uytterhoeven"

for(var i = 0; i< 10; i++)
{
  console.log(i)
}

console.log(i); */

//ES6 CONST vs LET

/* let firstname ="Stef";
firstname ="Bef"
console.log(firstname)

for(let j = 0; j< 10; j++)
{
  console.log(j)
} */

//ES5 concat

/* var firstname = "Stef"
var name = "Uytterhoeven"
console.log(firstname + " " + name); */

//ES6

/* let firstname = "Stef"
let name = "Uytterhoeven"
let fullname = `${firstname} ${name}`;
console.log(fullname) */

//ES5

/* var person = {
  firstname: "Stef",
  name: "Uytterhoeven",
  fullname: function(){
    console.log(this.firstname + " " + this.name)
  }
}

console.log(person.firstname) //Stef
person.fullname(); // Stef Uytterhoeven */

//ES6

/* let person ={
  firstname: "Stef",
  name: "Uytterhoeven",
  fullname(){
    console.log(`${this.firstname} ${this.name}`);
  }

}
console.log(person.firstname) //Stef
person.fullname(); // Stef Uytterhoeven  */

//ES5

/* var person = {
  firstname: "Stef",
  name: "Uytterhoeven",
  Fullname: function(){
    console.log(this.firstname + " " + this.name)
  }
};

console.log(person.firstname) //Stef
person.Fullname(); // Stef Uytterhoeven

var getfullname = person.Fullname()
getfullname // error
 */
//ES6

/* let person = {
  firstname: "Stef",
  name: "Uytterhoeven",
  Fullname: function(){
    console.log(this.firstname + " " + this.name)
  }
};

console.log(person.firstname) //Stef
person.Fullname(); // Stef Uytterhoeven

let getfullname = person.Fullname().bind(person);
getfullname // works in ES6 */


// ES5

/* var person = {
  firstname: "Stef",
  name: "Uytterhoeven",
  Fullname10sec: function(){
    var self = this
    setTimeout(function(){
      
      console.log(self.firstname + " " + self.name);
    },10000);    
  }
};

person.Fullname10sec(); */

//ES6

/* const person = {
  firstname: "Stef",
  name: "Uytterhoeven",
  Fullname10sec() {
    setTimeout(() => {      
      console.log(this.firstname + " " + this.name);
    },10000);
    
  }
};

person.Fullname10sec(); */

//ES 5 function

var square = function(number) {
  return number * number;
};

console.log(square(5))

//ES6 function 

/* // if 1 parameter you could remove the ()
const squareES6 = number => {
  return number * number;
};
// if multiple 
const squareES6 = (number1 , number2) => {
  return number * number;
};

// if no parameters
const squareOf5 = () => {
  return 5 * 5;
};

// If only 1 line 
const square = number => number * number; */

//ES5 mapping

/* var colors = ["red", "green", "blue"];
var items = [];

for (var i = 0; i < colors.length; i++) {
    items.push("<li>" + colors[i] + "</li>");
}

console.log(items); */

//ES6 mapping

/* const colors = ["red", "green", "blue"];
let items = colors.map(color => `<li>${color}</li>`);

console.log(items); */


//ES 5 object destructuring

/* var user = {
  name: "Van der Vorst",
  firstname: "Collin",
  age: 30
};

var name = user.name;
var firstname = user.firstname;
var age = user.age; */

//ES 6 objec destructuring

c/* onst user = {
  name: "Van der Vorst",
  firstname: "Collin",
  age: 30
};

const { name, firstname, age } = user;
const { name: userFirstname, firstname, age } = user; */

//ES 5 spreadoperators

/* var users1 = ["collin", "jan", "tom"];
var users2 = ["jef", "john", "lisa"];

var users = users1.concat(users2);
console.log(users); */

//ES 6 spreadoperators

/* var users1 = ["collin", "jan", "tom"];
var users2 = ["jef", "john", "lisa"];

var users = [...users1, ...users2];
console.log(users); */

//ES 5 classes

/* var users1 = {
  name: "Collin",
  talk() {
    console.log("Hi");
  }
}

var users2 = {
  name: "Lisa",
  talk() {
    console.log("Hi");
  }
}
 */
//ES 6 classes

/* class Person {
  constructor(name) {
      this.name = name;  
  }

  talk() {
      console.log("Hello I am " + this.name);
  }
}

const person1 = new Person("Collin");
const person2 = new Person("Lisa"); */

//ES6 class inherit

/* class Person {
  constructor(name) {
      this.name = name;  
  }

  talk() {
      console.log("Hello I am " + this.name);
  }
}

class Teacher extends Person {
constructor(name, degree) {
  super(name);
  this.degree = degree;
}
teach() {
  console.log("I am teaching");
}
}
const person1 = new Person("Collin");
const person2 = new Person("Lisa");
const teacher1 = new Teacher("Tom", "Bachelor IMS");

person1.talk();
person2.talk();
teacher1.talk();
teacher1.teach();

person1.talk();
person2.talk();
 */

//ES6 import classes

import { Person } from "./js/classes/person";
import { Teacher } from "./js/classes/teacher";

const person1 = new Person("Collin");
const person2 = new Person("Lisa");
const teacher1 = new Teacher("Tom", "Bachelor IMS");

person1.talk();
person2.talk();
teacher1.talk();
teacher1.teach();
