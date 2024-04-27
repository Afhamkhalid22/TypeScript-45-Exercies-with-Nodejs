let guestlist = ["Afham", "Talha", "Usama", "Jahanzaib"];

let dontcome = guestlist[0];

console.log(dontcome, "Nahi Ahh skta");

guestlist.splice(0, 1, "Subhan");

guestlist.forEach(guest => console.log(`asalam o Alikum ${guest}, would you like to dinner with me?`));
