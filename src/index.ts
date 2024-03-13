console.log("hello world");

// typescript is a superset of javascript

// this means if you want, you can (mostly) just write normal javascript
const number = 12345 * 678;
const boolean = true;
const array = ["a", "b", "c", "d"];
const joinedarray = array.join();

// typescript adds types to javascript. such a creative name
const typednumber: number = 472 / 12;
const typedboolean: boolean = false;
const typedarray: string[] = ["e", "f", "g", "h"];
const joinedtypedarray: string = typedarray.join();


// when you give a variable a type, typescript will enforce that the variable
// always holds that type
let bunny: string = "bunny";
bunny = "rabbit"; // ok because "rabbit" is still a string
// bunny = 3; // error since 3 is not a string


// when you assign a new variable, typescript can try to infer or "guess" what type it is
let cat = "cat";
console.log(typeof(cat)); // guessed it was a string
cat = String("kitty");
// cat = 3; // doesn't work


// you annotate the type of variables functions expect
function stringLengthCounter(inputString: string) {
    console.log(`The string is ${inputString.length} characters long`)
}

// as well as the type of variables a function outputs
function randomBetween1and100(): number {
    return Math.floor(Math.random() * 101)
}

// or both
function wordMultiplier(word: string, times: number): string {
    return word.repeat(times);
}

// or neither
function anythingIsPossible(var1: any, var2: any): any {
    console.log("any could be anything!")
}

// you can create your own types using interfaces
interface Person {
    age: number,
    gender: string,
    name: string
}

// or classes
class Dog {
    private age: number
    private gender: string
    private name: string
    private goodDog: boolean

    constructor(name: string, age: number, gender: string, goodDog: boolean) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.goodDog = goodDog;
    }

    speak(): string {
        return `Hello my name is ${this.name} and I am ${this.goodDog ? "": "not "}a good dog`
    }
}


// and you can use them like any other variable
let jim: Person = {
    age: 34,
    gender: "M",
    name: "Jim"
};

let bingo: Dog = new Dog("bingo", 5, "female", true);

function serve(person: Person) {
    console.log(`I'm sorry ${person.name}, your spouse wants a divorce`)
}
serve(jim)

function makeDogSpeak(dog: Dog) {
    console.log(dog.speak())
}
makeDogSpeak(bingo)


// typescript compiles to javascript. If you want to see that you can run
// `npm run compile` and view the compiled file in ./build/index.js

