//simple promise
var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, it worked');
    reject('Failed, unable to fulfill promise');
  }, 2000);

});


somePromise.then((message) => {
  console.log('Succes: ',message);
}), (errorMessage) => {
  console.log('Error: ',errorMessage);
};


//promise chaining
var asyncAdd = (a,b) => {
  return new Promise ((resolve, reject) => {//set conditions when to call
    setTimeout(() => {//which of promise function
      if (typeof a === 'number' && typeof b === 'number')  {
        resolve (a+b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 2000)
  })
};

asyncAdd(5, '7').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 45: ',res);
}).catch((errorMessage) => {//errorCall if any of Promise functions fail
    console.log(errorMessage);//instead of having to resolve callbacks
});
