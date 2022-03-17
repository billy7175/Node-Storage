const path = require("path");
const express = require("express");
const hbs = require("hbs");
// const geocode = require('./utils/geocode')
// const forecase = require('./utils/forecase')
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  // res.send('<h1>Server is running.</h1>');
  res.render("index", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Andrew",
  });
});

// app.get('/help', (req, res) => {
//   res.send({
//     name:'Billy',
//     job:'developer'
//   });
// })

app.get("/about", (req, res) => {
  res.render("about", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Andrew Mead",
  });
});

app.get("/products", (req, res) => {
  console.log("@query", req.query.search);
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term.",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecaseData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecaseData,
        location: location,
        address: req.query.address,
      });
    });

  }); // geocode

});

// app.get('/weather', (req, res) => {
//   if (!req.query.address) {
//       return res.send({
//           error: 'You must provide an address!'
//       })
//   }

//   geocode(req.query.address, (error, { latitude, longitude, location }) => {
//       if (error) {
//           return res.send({ error })
//       }

//       forecast(latitude, longitude, (error, forecastData) => {
//           if (error) {
//               return res.send({ error })
//           }

//           res.send({
//               forecast: forecastData,
//               location,
//               address: req.query.address
//           })
//       })
//   })
// })

app.get("/help/*", (req, res) => {
  res.send("Help Ariticle not found");
});

app.get("*", (req, res) => {
  res.send("My Page 404");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// console.log(express);
// console.log(app);
