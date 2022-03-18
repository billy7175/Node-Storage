console.log('Client side javascript file is loaded.');

// fetch('http://localhost:3000/weather?address=boston').then(res => {
//   res.json().then(data => {
//     if(data.error){
//       console.log(data.error)
//     } else {
//       console.log(data.location)
//       console.log(data.forecast)
//       console.log(data.address)
//     }
//   })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  fetch('http://localhost:3000/weather?address=' + location).then((response) => {
      response.json().then((data) => {
          if (data.error) {
              console.log(data.error)
          } else {
              console.log(data.location)
              console.log(data.forecast)
          }
      })
  })
})