const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault(); // Prevent default
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + search.value).then(response => {
    response.json().then(data => {
      console.log(data);
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
