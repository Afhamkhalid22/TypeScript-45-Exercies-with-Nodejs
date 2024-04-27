var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making  a Array of Countries and Print its Original Order
var counteriesToVisit = ["China", "Pakistan", "India", "Brazil"];
console.log("Original Order:", counteriesToVisit);
// Print the array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], counteriesToVisit, true).sort());
// show that the array is still in its original order
console.log("Still in Original Order:", counteriesToVisit);
// print a array in reversed order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], counteriesToVisit, true).reverse());
// show that the array is still in its original order
console.log("Still in Original Order:", counteriesToVisit);
// we have changed the Original Array Order now
console.log("Original Array Reversed:", counteriesToVisit.reverse());
// print the array to show that its back to its Original order
console.log("Back to Original Order:", counteriesToVisit.reverse());
// print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", counteriesToVisit.sort());
// we have changed again the Original array Order Now in reverse order again
console.log("Original Array Reversed Again:", counteriesToVisit.reverse());
