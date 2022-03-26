const express = require("express");
require("./db/mongoose");
// const User = require("./models/user");
// const Task = require("./models/task");
const userRouter = require('./router/user');
const taskRouter = require('./router/task')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({_id: 'abc123'},'thisismynewcourse', {expiresIn:'7 days'});
  const isVerified = jwt.verify(token, 'thisismynewcourse')
  console.log("token")
  console.log(token)
  console.log("@isVerified:", isVerified)
}

myFunction();



// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch_1 = await bcrypt.compare('red12345!', hashedPassword)
//     const isMatch_2 = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch_1)
//     console.log(isMatch_2)
// }

// myFunction()
