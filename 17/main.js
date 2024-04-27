// Creating a Guest List Array
var guestList = ["Afham", "Talha", "Usama", "Jahanzaib"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Skta han");
//Add or Remove Value from Guest List Array
guestList.splice(0, 1, "Afham");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index of array
guestList.push("Zain");
// Adding a new guest at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// print message of updated list
console.log("Update List of our Guests");
// Sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Asalam o Alikum ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two 2 Guest on the ist
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guests frim the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
