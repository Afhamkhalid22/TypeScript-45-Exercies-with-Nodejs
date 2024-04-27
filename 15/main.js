var guestlist = ["Afham", "Talha", "Usama", "Jahanzaib"];
var dontcome = guestlist[0];
console.log(dontcome, "Nahi Ahh skta");
guestlist.splice(0, 1, "Subhan");
guestlist.forEach(function (guest) { return console.log("asalam o Alikum ".concat(guest, ", would you like to dinner with me?")); });
