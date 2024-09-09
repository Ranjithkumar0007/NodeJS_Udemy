let name = "Ranjithkumar";
let age = 20;
const job = "Developer";
var hobbies = "Cricket";

// here You can able to change or set the let and var variable values, but you can't change the const variable value.

// you can call a function using like below also
const sampleFunction = function (name, age, job, hobbies){
    return('My name is '+ name +', My age is '+ age +', My job is '+job+', and my hobbie is '+hobbies);
}

// Arrow function
const sampleFunction1 = (name, age, job, hobbies) => {
    return('My name is '+ name +', My age is '+ age +', My job is '+job+', and my hobbie is '+hobbies);
}

const add = (a, b) => a+b;
const addOne = a => a+1;
const addRandom = () => 5+5;

console.log(sampleFunction(name, age, job, hobbies));
console.log(sampleFunction1(name, age, job, hobbies));
console.log(add(5,6));
console.log(addOne(5));
console.log(addRandom());