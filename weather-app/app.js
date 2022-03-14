
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log("Data :", data.location)
            console.log("Forecase :", forecastData)
        })
    })
}

// const url = 'http://api.weatherstack.com/current?access_key=c856b41f18ba9d50e97c6eabe865d192&query=42.3605,-71.0596'

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmlsbHk3MTc1IiwiYSI6ImNsMHF0anBlaTJkNDQzcm9hMmVvYzA1YTQifQ.OynpLvJpjEYoK7PmKcGYtQ'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// forecast(44.1545, -75.7088, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })