

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(
//         number1 + number2);
// }
// addTwoNumber("5", 10)


function addTwoNumber(number1, number2) {
   
    // let result = number1 + number2;
    // return result;    -----> Option 1

     return number1 + number2; //-----> Option 2  
}
const result = addTwoNumber(5, 10)

// console.log("Result: ", result);


function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username } just Logged in`
}
// console.log(loginUserMessage("RAhim"))


function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200,300,400))

const user ={
    username: "Rahim",
    price: 200,
}

function handleobject(any){
    console.log(`Username is ${any.username} and price is ${any.price}`);
    
}
handleobject(user)
// handleobject({
//     username: "shaikh",
//     price: 300
// })

 
const myNewArray = [200,400,500]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));