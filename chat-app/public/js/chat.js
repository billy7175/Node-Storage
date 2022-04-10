const socket = io();

socket.on('message', (message) => {
  console.log(message);
})

const messageForm = document.querySelector('#message-form')
const messageInput = document.querySelector('input')
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value
  socket.emit('sendMessage', message)
})

// socket.on('countUpdated', (count) => {
//   console.log('The count has been updaasdasdted.', count)
// })


// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('Clicked')
//   socket.emit('increment')
// })