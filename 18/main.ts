// Making  a Array of Countries and Print its Original Order
let counteriesToVisit: String[] = ["China", "Pakistan", "India", "Brazil"];
console.log("Original Order:", counteriesToVisit);

// Print the array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order:", [...counteriesToVisit].sort());

// show that the array is still in its original order
console.log("Still in Original Order:", counteriesToVisit);

// print a array in reversed order without modifying the actual array list
console.log("Reverse Order:", [...counteriesToVisit]. reverse());

// show that the array is still in its original order
console.log("Still in Original Order:", counteriesToVisit);

// we have changed the Original Array Order now
console.log("Original Array Reversed:", counteriesToVisit.reverse());

// print the array to show that its back to its Original order
console.log("Back to Original Order:", counteriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log ("Sorted in Alphabetical Order:", counteriesToVisit.sort());

// we have changed again the Original array Order Now in reverse order again
console.log("Original Array Reversed Again:", counteriesToVisit.reverse());





