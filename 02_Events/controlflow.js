// if

const isUserLoggedIn = true

// if (2 !=  3){
//     console.log("executed");

// }

const score =200

// if  (score > 100) {
//     const power = "fly"
//     console.log(`User power ${power}`)
// }

// const balance = 1000

// if(balance > 500){
//     console.log("You are rich")
// } else if (balance < 400) {
//     console.log("You are poor")
// } else {
//     console.log("You are middle class")
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInfromGoogle = false
// const loggedInfromEmail = true

// if (userLoggedIn && debitCard){
//     console.log("You can buy the product")
// }

// if (loggedInfromGoogle || loggedInfromEmail){
//     console.log("You can login")
// }



//----------------------- SWITCH -----------------------

const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        
        break;
}

//---------------------- Truthy and Falsy values ---------------------

const userEmail= "rahim@.com"

if (userEmail) {
    console.log("Email is present");
} else {
    console.log("Email is not present");
}

//falsy values

false, 0, -0, BigInt , "" ,null, undefined, NaN

//truthy values
true, 1, -1, BigInt(10), "0", " ", "false", [],{}, function(){}


// ------------- Nulish Coalescing Operator -----------------

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? undefined ?? 10

// console.log(val1);



//---------------------------- ternary operator

const iceTEaPrice = 100
iceTEaPrice >=120 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");

