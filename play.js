var variable1 = 'What is your name?';
var variable2 = 'Ranjith';
var variable3 = 'What is your age?';
var variable4 = 20;
var hasHobbies = true;

console.log(variable1);
console.log(userDetails(variable2, variable4, hasHobbies))

function userDetails(name, age, hasHobbies){
    return(
        'My name is '+name+' and my age is '+age+' and the user has hobbies: '+hasHobbies
    );
}