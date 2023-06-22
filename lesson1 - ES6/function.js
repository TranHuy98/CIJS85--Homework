//Cac loai function trong js

//1. Function declaration, Naming function

//function co co che hoisting

function sum(a,b){
    const sum = a+b;
    console.log(`${a} + ${b} = ${sum}`);
}

sum(2,4);

//2. Expression function

function greeting(name){
    console.log(`Hello ${name}`);
}

greeting("MindX");


const greeting2 = (name) =>{
    console.log(`Hello ${name}`);
}

//3. Immediately invoke function expression: IIFE

(function(){
    console.log(`Hello world`);
})();

//4. Arrow Function

//arrow function ko co co che hoisting

const tong = (a,b) => {
    const sum = a+b;
    console.log(`Arrow function: ${a} + ${b} = ${sum}`);
}

tong(10,23);


//Hinh thai khac cua arrow function

//return ve gia tri ma ko thuc hien them logic
const getSQRT = (num) => Math.sqrt(num);

//return ve object

const getPersonObject = (name,age) =>{
    return{
        name: `My name is ${name}`,
        age: `My age is ${age}`,
    };
}

//rut gon

const getPersonObject2 = (name, age) =>{
    name: `My name is ${name}`;
    age: `My age is ${age}`;
}

//su khac nhau ve context giua normal va arrow function

const person = {
    name: "CR",
    sayHi: function(){
        console.log(this);
    }
}

const person2 = {
    name: "Mes",
    sayHi: () =>{
        console.log(this);
    }
}