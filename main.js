let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "HELLO";
  wrapper.appendChild(newItem);
});

console.log("hello!");


let navElement = document.querySelector(".nav");
navElement.classList.add("special");

