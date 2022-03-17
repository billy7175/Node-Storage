const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const token = "c856b41f18ba9d50e97c6eabe865d192"
    
    const url = 'http://api.weatherstack.com/current?access_key=' + token +'&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast