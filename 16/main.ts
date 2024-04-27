// Creating a Guest List Array
let guestList = ["Afham", "Talha", "Usama", "Jahanzaib"];

// making variable for those guest who cant come
let dontCome = guestList[0];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

// print message of updated list
console.log("Update List of our Guests");

// Sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Asalam o Alikum ${oneguest}, would you like to dinner with me`));