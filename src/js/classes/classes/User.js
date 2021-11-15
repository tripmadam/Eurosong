
export class Person {
    constructor(name) {
        this.name = name;  
    }
 
    talk() {
        console.log("Hello I am " + this.name);
    }
}
 
export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("I am teaching");
  }
}


