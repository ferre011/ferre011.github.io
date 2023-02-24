var redbox = document.getElementById("one");
var yellowbox = document.getElementById("two");

redbox.onclick = function () {
  if (yellowbox.style.display !== "none") {
    yellowbox.style.display = "none";
  } else {
    yellowbox.style.display = "block";
}
};
