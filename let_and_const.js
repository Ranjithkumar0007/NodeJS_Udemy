let name = "Ranjithkumar";
let age = 20;
const job = "Developer";
var hobbies = "Cricket";

name = "Ranjith";
age = 40;
// job = "Software Developer";
hobbies = "Bike ride";

// here You can able to change or set the let and var variable values, but you can't change the const variable value.

function sampleFunction(name, age, job, hobbies){
    return('My name is '+ name +', My age is '+ age +', My job is '+job+', and my hobbie is '+hobbies);
}

console.log(sampleFunction(name, age, job, hobbies));