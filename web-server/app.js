const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
})

app.get('/help', (req, res) => {
  res.send('Hello page');
})

app.get('/about', (req, res) => {
  res.send('Hello about');
})

app.get('/weather', (req, res) => {
  res.send('Hello weather');
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

// console.log(express);
// console.log(app);