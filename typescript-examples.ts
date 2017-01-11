//Types:
let randomString: string;
let randomNumber: number;
let randomArray: string[];
let randomBoolean: boolean;
let random: any;

//TypeGuard:
type thing = string | string[];
let returnSomeThing = (someThing: thing) => {
  if(someThing instanceof Array) {
    console.log('this is an array')
  }
  if(typeof someThing !== 'string') {
    console.log('error, this is not a string')
  }
  console.log('string = ', someThing)
}

//returnSomeThing(false); returns a compiler error since it is not a string
returnSomeThing("hello world")
returnSomeThing(["hey", "there", "world"])

//Interface
interface OptionalAttributes {
  alias?: string; // the '?' makes them optional to use
  kind?: boolean;
}

interface Person extends OptionalAttributes {
  name: string;
  height: number;
  weight: number;
}

let friend: Person = {
  name: "Bob",
  alias: "Boy wonder",
  height: 180,
  weight: 90,
  kind: true
};

//Constructor:
class Person{
  constructor(name: string, alias: string, height: number, weight: number, kind: boolean) {
    this.name = name;
    this.alias = alias;
    this.height = height;
    this.weight = weight;
    this.kind = kind;
  }

  static baby(name: string, parents: Person[]) {
    return {
      name: name,
      parents: parents
    }
  }
}

let bob = new Person("Bob", "Boy Wonder", 180, 90, true); //creates bob as an instance of Person
let francine = new Person("Francine", "Fran", 175, 70, true);

let baby = Person.baby("Frank", [bob, francine]);
