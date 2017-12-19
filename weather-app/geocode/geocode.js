const request = require('request');

module.exports.geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  var url = `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`;
  request({
    url,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response, undefined, 2)); //for statusCode e.g.
    //console.log(JSON.stringify(body, undefined, 2));

    if(error) {
      callback('Unable to connect to Google servers.');
          } else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address.');
    } else if(body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });

};
