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

returnSomeThing(false);
returnSomeThing("hello world")
returnSomeThing(["hey", "there", "world"])

//Constructor:
