const user = {
    username: "Rahim",
    price: 200,

    welcomemessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage(this)

// function chai() {
//     let username = "Rahim"
//     console.log(this.username);
//     }
// chai()

const chai = () => {
    let username = "Rahim"
    console.log(this);
    
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;

// }
// console.log(addTwo(3,4)) //--------------->>>>>>>>>>> arrow function main curley bracket {} hon gy tou return krna zaruri hai 



const addTwo = (num1,num2) => num1 + num2

console.log(addTwo(3,4));
