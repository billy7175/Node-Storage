const http = require('http')
const token = "c856b41f18ba9d50e97c6eabe865d192"
// const url = 'http://api.weatherstack.com/current?access_key=' + token +'&query=' + latitude + ',' + longitude + '&units=f'
const url = 'http://api.weatherstack.com/current?access_key=' + token + '&query=40,-75&units=f'



const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log('End')
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('Error')
    console.log('An error', error)
})

request.end()