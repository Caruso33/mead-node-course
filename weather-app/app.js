const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

var argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias("help", 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  }
  else {
    //console.log(JSON.stringify(results, undefined, 2));
    console.log(results.address);
    weather.getForecast(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temp}.`);
        console.log(`It feels like ${weatherResults.apparentTemp}.`);
      }
    });
  }
});

// Google Geocode API AIzaSyAiuG5cbz3InBzkgsr0jrZhC-G19yHT5nQ
