let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "WAVES BECOME HIGHER";
  wrapper.appendChild(newItem);
});

