const hobbies = ['Cricket', 'Football', 'Bike Ride'];
const person2 = {
    name: 'Ranjithkumar',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
};

const copyHobbies = hobbies.slice();
const copyHobbies1 = [hobbies];

// Spread operator
const copyHobbies2 = [...hobbies];
const copyPerson2 = {...person2};


console.log(copyHobbies);
console.log(copyHobbies1);
console.log(copyHobbies2);
console.log(copyPerson2);


const toArray = (a, b, c) => { return [a,b,c] };
// Rest operators
const toArray1 = (...args) => { return args };

console.log(toArray(3,5,7,9));
console.log(toArray1(3,5,7,9));