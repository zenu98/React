// Primitives: number, string, boolean
// More complex types: arrays, objects
//Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName= "Seo";

let isInstrutor: boolean;
isInstrutor = true;

// More complex types

let hobbies: string[];
hobbies = ["Soccer","Music"];

type Person = {
    name: string;
    age: number;
}

let person:Person;



person = {
    name: 'Seo',
    age: 24
}

// person ={
//     hungry:true   
// }

let people:Person[];

// Type inference

let course: string | number  = 'Typescript';
course = 1234;

// Functions & types

function add(a: number,b:number) {
    return a+b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array:T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray,2);

