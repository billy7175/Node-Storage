const doCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error',[1,2,3])
        callback('error', 'result')
    },100)
}

doCallback((error, result) => {
    if(error){
        return console.log('@error:', error)
    }

    console.log('@result:', result)
})

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([7, 4, 1])
//         // reject('Things went wrong!')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//