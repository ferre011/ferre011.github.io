
var all = document.getElementById("btn-all");
var btngr = document.getElementById("btn-greater-than-30");
var btnlt = document.getElementById("btn-less-than-30");

/* fetch sends request to server to pull data from json file
include your file name as your argument*/
fetch("/tattoos.json")
  /* catch the servers response with .then method  */
  .then(function (response) {
    /* convert json data to javascript object   */
    console.log(response);
    return response.json();
  })
  /* fetch the products. adding a function as an argument allows you to design with the data    */
  .then(function (tattoos) {
    /*get access to our data elements 
  store values in a variable named placeholder */
let placeholder = document.querySelector("#data-output");
  


    // Define displayData function
    function displayData(tattoos) {
      placeholder.innerHTML = "";

      /*for loop cycles through each item in the array    */
      for (let tattoo of tattoos) {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<div class="tattooimg"><img src='${tattoo.img}'></div>
  <div class="${tattoo.name}">${tattoo.name +" - "+ tattoo.significance}</div>`;
        placeholder.appendChild(itemElement);
      }
    }


    // Add event listeners to buttons to filter data
    all.addEventListener("click", function () {
      console.log("test");
      displayData(tattoos);
    });

    btngr.addEventListener("click", function () {
      const filteredData = tattoos.filter((tattoo) => tattoo.age > 30);
      displayData(filteredData);
    });

    btnlt.addEventListener("click", function () {
      const filteredData = tattoos.filter((flower) => tattoo.name < 30);
      displayData(filteredData);
    });
  });
