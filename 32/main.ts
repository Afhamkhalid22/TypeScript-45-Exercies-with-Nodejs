// Array of Current Users
let Current_users = ["Usama", "Ali", "Areeba", "Zain", "Osama"]

// Array of New Users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = Current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
     
    // Print Different message using If-Else statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})
