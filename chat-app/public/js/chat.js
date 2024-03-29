const socket = io();

//Element
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = document.querySelector('input')
const $messageFormButton = document.querySelector('button')
const $sendLocation = document.querySelector("#send-location")
const $messages = document.querySelector('#messages')


// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML


// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })



socket.on("message", (message) => {
  console.log('###message', message);
  const html = Mustache.render(messageTemplate, {
    username:message.username,
    message:message.text,
    createdAt:moment(message.createdAt).format('h:mm a')
  })
  $messages.insertAdjacentHTML('beforeend', html)

});

socket.on('locationMessage', (message) => {
  console.log('#url', message)
  const html = Mustache.render(locationMessageTemplate, {
    username:message.username,
    url: message.url,
    createdAt:moment(message.createdAt).format('h:mm a')
  })

  $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('roomData', ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
      room,
      users
  })
  document.querySelector('#sidebar').innerHTML = html
})

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  $messageFormButton.setAttribute('disabled', true)

  const message = e.target.message.value;
  socket.emit("sendMessage", message, (error) => {
    $messageFormButton.removeAttribute('disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus();
    if (error) {
      return console.log("error", error);
    }
    console.log("Message has been delivered.");
  });
});
// 
$sendLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }

  $sendLocation.setAttribute('disabled', 'disabled')

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        $sendLocation.removeAttribute('disabled')
        console.log("Location has been shared with other people.");
      }
    );
  });
});

socket.emit('join', { username, room }, (error) => {
  if(error){
    alert(error)
    location.href ='/'
  }
})