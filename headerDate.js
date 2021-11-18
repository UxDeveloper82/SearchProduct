const options = { weekday: 'long', month: 'short', day:'numeric'};
const dateElement = document.getElementById("date");
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);