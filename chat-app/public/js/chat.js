const socket = io();

socket.on('message', (message) => {
  console.log(message);
})

// const messageInput = document.querySelector('input')
document.querySelector('#message-form').addEventListener('submit', (e) => {
  
  e.preventDefault();
  const message = e.target.message.value
  socket.emit('sendMessage', message)
})
