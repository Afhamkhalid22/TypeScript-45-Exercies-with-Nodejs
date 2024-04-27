// Creating a Array
var userNames = ["Afham", "Jahanzaib", "Usama", "Admin", "Osama"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Helllo ".concat(oneUser, ", thank you for logging in again."));
    }
});
