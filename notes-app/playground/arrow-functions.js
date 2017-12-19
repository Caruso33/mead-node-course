var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Tobias',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
    //console.log(arguments); doesnt work in the way we want it..
    // gives global argument back
  },
  sayHiAlt () {

    console.log(`Hi. I'm ${this.name}`);
    //ES6 function works
    // solves issues when creating functions of object literals
    console.log(arguments);
  }
}

user.sayHi();
user.sayHi(1,2,3);
user.sayHiAlt();
user.sayHiAlt(1,2,3);
