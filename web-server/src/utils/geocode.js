const request = require('request')

const geocode = (address, callback) => {
    const token = "pk.eyJ1IjoiYmlsbHk3MTc1IiwiYSI6ImNsMHF0anBlaTJkNDQzcm9hMmVvYzA1YTQifQ.OynpLvJpjEYoK7PmKcGYtQ"
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token='+token;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode