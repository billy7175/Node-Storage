const socket = io();

//Element
const $messageForm = document.querySelector("#message-form")
const $messageFormInput = document.querySelector('input')
const $messageFormButton = document.querySelector('button')
const $sendLocation = document.querySelector("#send-location")


socket.on("message", (message) => {
  console.log(message);
});

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
