//Ex1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9'; // myString can not be of type number but can hold a nine as a string

//Ex2
function sayHello(name: string){
    return `Hello, ${name}!`;
}
 // This is working great:
console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello('9'));
 //say Hello must have a string as input so 9 must be of type String

 //Ex3

//placing a question mark solves the issue as it marks it as optional
function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 
// Ex4 

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //belts must be plural to implement interface student
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));


 //Ex5

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const turing = new Ninja('Alan', 'Turing'); //add new and input parameters to create object
 
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

 //Ex6

//Set type of input for the function
let increment = (x: number):number => { return x + 1};
// This works great:
console.log(increment(3));
let square = (x:number):number => {return x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
let multiply = (x: number,y:number):number => { return x * y}
// Nor is this working:
let math =(x:number, y:number):number[] => {let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference]}


//Ex7

class Elephant {
    constructor(public age: number){
        this.age = age; //seting up age variable
    }
    birthday = ():void => {this.age++} 
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)



