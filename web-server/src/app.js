const path = require('path')
const express = require('express');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs');
app.set('views', viewPath)
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  // res.send('<h1>Server is running.</h1>');
  res.render('index')
})

// app.get('/help', (req, res) => {
//   res.send({
//     name:'Billy',
//     job:'developer'
//   });
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>about</h1>');
// })

app.get('/weather', (req, res) => {
  res.send({
    forecase: "It is snowing.",
    location: 'Philadelphia'
  });
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

// console.log(express);
// console.log(app);