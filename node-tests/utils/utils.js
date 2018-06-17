//npm i mocha --save-dev
//for development purpose only
//!!!!!!!!!

module.exports.add = (a,b ) => a+b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};


module.exports.square = x => x*x;
module.exports.asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback( x*x) ;
  }, 1000);
};

//nodemon --exec 'npm test'
//for setting up a file which is not node.js
//and update it

//or as package is updated
//npm run test-watch

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');//good
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
