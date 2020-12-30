var newContainer = document.createElement("div");
newContainer.id = "houses";
document.body.appendChild(newContainer);

buildList = () => {
  //   https://www.google.com/maps/place/419+S+Wells+St,+Chicago,+IL+60607/

  for (let i = 0; i < houses.length; i++) {
    // Creates a Div for the house
    var houseContainer = document.createElement("div");
    const regex = / /gi;
    mapsLink = houses[i].address.replace(regex, "+");
    houseContainer.className = "house";
    houseContainer.innerHTML =
      "<img src='" +
      houses[i].profilePic +
      "'>" +
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
      "</p>";

    document.getElementById("houses").appendChild(houseContainer);
  }
};

buildList();

//  Make some kind of search function with an input box
