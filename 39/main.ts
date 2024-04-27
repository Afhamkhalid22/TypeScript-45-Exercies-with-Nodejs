// Creating a function with parameters which return a values in string
function city_country(city: string, country: string) : string{
    return`${city}, ${country}`;
}

// Calling a function and Print the returned vaue

console.log("karachi", "Pakistan");

console.log(city_country("Tokoyo", "Japan"));

console.log(city_country("berlin", "Germany"));
