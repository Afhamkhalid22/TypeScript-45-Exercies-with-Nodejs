// Creating a Array
let userNames = ["Afham", "Jahanzaib", "Usama", "Admin", "Osama"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Helllo ${oneUser}, thank you for logging in again.`)
    }
}) 
    

