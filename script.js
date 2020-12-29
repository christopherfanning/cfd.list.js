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
    var newElement = document.createElement("div");
    newElement.className = "house";
    newElement.innerHTML = houses[i].name;
    document.getElementById("houses").appendChild(newElement);
    // document.body.appendChild(houses[i].name);
  }
};

buildList();

// printHouses();

//  Make some kind of search function with an input box
