// Define a function with a rest parameter that accept items arugments representing our sandwich

function makeSAndwich(...items: string[]){
    console.log("\n Making a Sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Cheese", "Mayo", "Eggs");

makeSAndwich("Bread", "Butter");

makeSAndwich("Bread", "Butter", "Mayo", "Eggs", "Cheese", "Chicken", "Tomato");