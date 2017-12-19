const request = require('request');

module.exports.getForecast = (lat, lng, callback) => {

  var key = '1d92668c4557bb84083aabd5539a5b9e';
  var url = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;
  request({
    url,
    json: true,
    qs: {
      units: 'si'
    }
  }, (error, response, body) => {
    if (!error && response.statusCode === 200 ){
      callback(undefined, {
        temp: body.currently.temperature,
        apparentTemp : body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
}
