// create an array of the houses
// const houses = ["Engine 1", "Engine 2", "Engine 3", "red"];

// Print out the houses in some formatted way
// printHouses = () => {
//   var newContainer = document.createElement("div");
//   newContainer.id = "houses";
//   document.body.appendChild(newContainer);

//   for (var h in houses) {
//     var newElement = document.createElement("div");
//     newElement.className = "house";
//     newElement.innerHTML = houses[h];
//     document.getElementById("houses").appendChild(newElement);
//   }
// };

function load() {
  var derp = JSON.parse(houses);
  console.log(derp[1].name);
}
load();

// printHouses();

//  Make some kind of search function with an input box
