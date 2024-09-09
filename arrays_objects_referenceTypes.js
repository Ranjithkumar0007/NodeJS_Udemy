const person2 = {
    name: 'Ranjithkumar',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Cricket', 'Football', 'Bike Ride'];

hobbies.push('Programming');
console.log(hobbies);