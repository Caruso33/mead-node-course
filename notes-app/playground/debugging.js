var person = {
  name : 'Tobi'
};

person.age = 31;

debugger; // use c for stopping here

person.name = 'Hubert';

console.log(person);

// start with command line
// node debug playground/debbuging.js
// n for until next statement
// n n n n n....
// c for continue
// repl for reevaluate print loop
// with repl you are in new command line within program
// so you can change and look for variables / objects
// quit for exiting the debugger
