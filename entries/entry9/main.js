let button = document.querySelector(".button");
let wrapper = document.querySelector(".wrapper");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "WAVES BECOME HIGHER";
  wrapper.appendChild(newItem);
});

let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  blobs.forEach(function (blob) {
    blob.style.right = (100 * Math.random()) + '%';
    blob.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("blob")) {
      event.target.remove();
    }
  });