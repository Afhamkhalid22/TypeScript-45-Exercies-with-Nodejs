// Define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
} 

// Function to make magicians great through .map() it will modify array

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define an array containing magicians name
let magician_names = ["Afham", "Talha", "Osman"]

// Making a copy of original array through .Slice() function

let copy_magicians_names = magician_names.slice()

// Modify the copied array to include "The Great" with their names

let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays original and copied

// Original

console.log("Original Array\n")
show_magicians(magician_names);

// copied

console.log("\n Copied Array\n")
show_magicians(copy_great_magicians);
