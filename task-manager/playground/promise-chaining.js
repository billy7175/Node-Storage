require('../src/db/mongoose')
const User = require('../src/models/user')
const age = 33
User.findByIdAndUpdate('6237548824b827d2fd4a74fa', { age: age }).then((user) => {
    console.log('@user:', user)
    return User.countDocuments({ age: age })
}).then((result) => {
    console.log("@result:", result)
}).catch((e) => {
    console.log(e)
})