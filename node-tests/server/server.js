const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
      error: 'Page not found.',
      name: 'Todo App v1.0'
  });

});

app.listen(3000, () => {
  console.log('Listening on 3000');
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Tobi', age: 31
    },{
      name: 'Andi', age: 25
    },{
    name: 'Karl-Heinz', age: 45
    }
  ]);
});


module.exports.app = app;
