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

  //   https://www.google.com/maps/place/419+S+Wells+St,+Chicago,+IL+60607/

  for (let i = 0; i < houses.length; i++) {
    // Creates a Div for the house
    var houseContainer = document.createElement("div");
    const regex = / /gi;
    mapsLink = houses[i].address.replace(regex, "+");
    houseContainer.className = "house";
    houseContainer.innerHTML =
      "<h3>" +
      houses[i].name +
      "</h3>" +
      "<p>" +
      "<a href='https://www.google.com/maps/place/" +
      mapsLink +
      ",+Chicago,+IL/'>" +
      houses[i].address +
      "</a>" +
      "</p>" +
      "<p>" +
      houses[i].rigs +
      "</p>" +
      "<img src='" +
      houses[i].profilePic +
      "'>";

    document.getElementById("houses").appendChild(houseContainer);
  }
};

buildList();

// printHouses();

//  Make some kind of search function with an input box
