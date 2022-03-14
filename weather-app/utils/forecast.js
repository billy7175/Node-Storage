const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const token = "c856b41f18ba9d50e97c6eabe865d192"
    
    const url = 'http://api.weatherstack.com/current?access_key=' + token +'&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast