const path = require("path");
const express = require("express");
const hbs = require("hbs");

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

app.get("/weather", (req, res) => {
  res.send({
    forecase: "It is snowing.",
    location: "Philadelphia",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// console.log(express);
// console.log(app);
