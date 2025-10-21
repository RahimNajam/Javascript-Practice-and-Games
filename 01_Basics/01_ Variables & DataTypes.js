// const accountId = '1234567890';
// let accountName = 'John Doe';
// var accountPassword = "12345"
// accountCity = 'hyderabad';

// // accountId = '0987654321 '; not allowed
// accountName = 'Rahim'
// accountPassword = '67890';
// accountCity = 'Mumbai';
// console.table([accountId, accountName, accountPassword, accountCity]);


// // Datatypes
// /* Number
//     Sting
//     Symbol
//     Null
//     Bigint
//     Boolean
//     Undefined */
  

//     const name = "rahim"
//     const age = 24 
//     console.log(`My name is ${name} and i am ${age} years old`);
    

//     //++++++++++++++++++++++ Number +++++++++++++++++++++++
//     const score = 400
//     console.log(score);

//     const balance = new Object(100)
//     console.log(balance);
    
//     console.log(balance.toString().length); // yai bta daiga 100 mai kitny digits hain
//     console.log(balance.toFixed(2)); // yai bta daiga 100 kai bad kitny point lga kr zero lgany hain

//     const otherNumber = 23.8966

//     console.log(otherNumber.toPrecision(3)) // yai round of krky value bta daita hai jitny digits pr karani ho


//     const hundreds = 1000000
//     console.log(hundreds.toLocaleString('en-IN')); // yai number ky bad comma laga daita hai or en-in ki jgah hum mdn pr jakr dosri currency ka bhi dekh skty hain


//     // ++++++++++ MATHS ++++++++++++++++++++++++++++

//     console.log(Math.abs(-4)); // math.abs sey - ki jo bhi value hogi wo possitive mai hokr ajye gi
//     console.log(Math.round(4.6)); // math.round sey value ko round of kr daita hai.
//     console.log(Math.floor(4.9)); // math.floor sey value ko floor kr daita hai yani 4.9 ko 4 kr dega poitn rmve kr dai ga 

//     console.log((Math.random()*10) +1); // math.random sey 0 se 1 ke darmiyan koi bhi random value dega
    
//     const min = 10
//     const max = 20
//     console.log(Math.floor(Math.random() * (max - min) + min)) // ismey dekho min or max kaise use kiya gya hai yani 10 se 20 ke darmiyan koi bhi random value dega


//     //+++++++++++++ DATES +++++++++++++++++++++ isko bnany ky liay bss funcction mai ".to" lga kr suggestion lai kr koi bhi date lga skty hain or date aik "object" hai

//     let myDate = new Date();
//     console.log(myDate.toString()); // yai date ko string mai convert kr dega
//     console.log(myDate.toLocaleString())
//     console.log(myDate.toDateString()); // yai date ko sirf date mai convert kr dega
//     console.log(typeof myDate); 
 
//     let myCreatedDate = new Date(2023, 0, 23); // months are 0-indexed, so 0 is January
//     console.log(myCreatedDate.toDateString());

//     let myTimeStamp = Date.now()
//     console.log(myTimeStamp); // yai current time ka timestamp dega yani seconds mai dega

//     let newDate = new Date ()
//     console.log(newDate.getMonth()+1); // yai current month dega, note: months are 0-indexed, so we add 1 to get the correct month number
//     console.log(newDate.getFullYear()); // yai current year dega
//     console.log(`Today is ${newDate.toDateString()} and the Time is ${newDate.getTime()} }`);

//    console.log( newDate.toLocaleString('default',{
//         weekday: "long",
//         year: "numeric",   
//         month: "long",
//         day: "numeric", 
//         hour: "2-digit",
//         minute: "2-digit",
//     }))
    

//     //************** Array *********** */

//     const myArr= [0,1,2,3,4]
//     const myHeros= ['spiderman', 'batman', 'superman', 'ironman']
//     console.log(myHeros[0]);

//     // Array Methods // .unshift() adds an element to the beginning of the array .shift() removes the first element from the array .

//     myArr.push(5);
//     myArr.push(6);
//     myArr.pop(); // removes the last element from the array
//     console.log(myArr); // adds 5 at the end of the array 

//     const newArr = myArr.join()
//     console.log(myArr);
//     console.log(newArr);

//     //Slice and Splice 
//     //Splice index mai sey wo remove krta hai 

//     console.log("A ", myArr);
//     const myn1 = myArr.slice(1, 3)
//     console.log("B ", myn1);
//     const myn2= myArr.splice(1, 2) // splice remove bhi krta hai  or add bhi krta hai or replace bhi krta hai
//     console.log("C ", myn2);

//+++++++++ yahan sey alag comment hoga nichey or uper ka alag

// const marvel_heroes = ["thor", "hulk", "ironman"];
// const dc_heroes = ["batman", "superman", "flash"]

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros); // combines two arrays 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahim"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        usersFullName:{
            firstname: "Rahim",
            lastname: "Najam"
        }
    }
}
// console.log(regularUser.fullName.usersFullName.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3); // combines two objects


const users = [
    {
        id: 1,
        email:"rahim@.com",
    },
    {
        id: 1,
        email:"rahim@.com",
    },
    {
        id: 1,
        email:"rahim@.com",
    }, 
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "JavaScript",
    price: "999",
    courseinstructor: "Rahim",
}
// course.courseinstructor

 


