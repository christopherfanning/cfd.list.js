// create an array of the houses
// const houses = ["Engine 1", "Engine 2", "Engine 3", "red"];

// Print out the houses in some formatted way
// printHouses = () => {
var newContainer = document.createElement("div");
newContainer.id = "houses";
document.body.appendChild(newContainer);

// for (var h in houses) {
//   var newElement = document.createElement("div");
//   newElement.className = "house";
//   newElement.innerHTML = houses[h];
//   document.getElementById("houses").appendChild(newElement);
// }
// };

function load() {
  //   console.log(houses[0].name);
}
// load();

buildList = () => {
  //   for (var h in houses) {
  //     console.log(houses[1].name);

  //   }

  for (let i = 0; i < houses.length; i++) {
    // Creates a Div for the house
    var houseContainer = document.createElement("div");
    houseContainer.className = "house";
    houseContainer.innerHTML =
      "<h3>" +
      houses[i].name +
      "</h3>" +
      "<p>" +
      houses[i].address +
      "</p>" +
      "<p>" +
      houses[i].rigs +
      "</p>";
    document.getElementById("houses").appendChild(houseContainer);
  }
};

buildList();

// printHouses();

//  Make some kind of search function with an input box
