// object
const person = {
    name: 'Ranjith',
    age: '28'
};

const person1 = {
    name: "Kumar",
    age: 29,
    greet: function() { console.log( 'Hi Everyone! my name is '+this.name); }
}

const person2 = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  

// console.log(person);
person1.greet();
person2.greet();