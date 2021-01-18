const request = require('request')
const geocode = require('./utils.js/geocode');
const forecast = require('./utils.js/forecast');
const address = process.argv[2];

if(!address){
    console.log('no value is provided');
} else {
    geocode(address, (error, data) => {
    if(error) {
        return console.log(error);
    }
    
    forecast(data, (error, forecastData) => {
        if(error) {
            return console.log(error);
        }

        console.log(data.location);
        console.log(forecastData);
    })
});

}
