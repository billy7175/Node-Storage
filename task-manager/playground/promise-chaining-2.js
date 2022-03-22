require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6239c96f814584dac0f0df08').then((task) => {
    console.log('@task:', task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log('@result:', result)
}).catch((e) => {
    console.log(e)
})