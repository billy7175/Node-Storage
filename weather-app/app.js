
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c856b41f18ba9d50e97c6eabe865d192&query=42.3605,-71.0596'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})