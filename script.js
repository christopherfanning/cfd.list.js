// create an array of the houses
const houses = ["apple", "blue", "house", "red"];

// Print out the houses in some formatted way
printHouses = () => {
  for (var h in houses) {
    var newElement = document.createElement("div");
    newElement.id = houses[h];
    newElement.className = "house";
    newElement.innerHTML = houses[h];
    document.body.appendChild(newElement);
  }
};

printHouses();

//  Make some kind of search function with an input box
