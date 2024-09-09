const person = {
    name: 'Ranjithkumar',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
};
const hobbies = ['Cricket', 'Football', 'Bike Ride'];

const printName = personData => {
    console.log(personData.name);
}
printName(person);


// object destructuring
const printName1 = ({ name,age }) => {
    console.log(name);
    console.log(age);
}
printName1(person);
const {name,age} = person;
console.log(name, age);
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);

