class MyFirstClass {
  changeName (name) {
    this.name = name;
    this.sayHello();
  }
  name = "bob"
  sayHello () {
   console.log("hello" + this.name);
  }
}

let myFirstInstance = new MyFirstClass();
myFirstInstance.changeName("Frank");
myFirstInstance.sayHello();

let mySecondInstance = new MyFirstClass();
mySecondInstance.sayHello();
myFirstInstance.sayHello();
