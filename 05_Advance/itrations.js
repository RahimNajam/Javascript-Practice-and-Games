//--------------------- For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number")
    }
    // console.log(element);
        
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop value: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j);
    
   }
    
    
}

let myArray =["flash", "batman", "superman", "spiderman" ]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// Break and Continue

for (let index = 1; index <= 20; index++) {
    if (index==5){
        // console.log("5 is best number");
        break
    }
    // console.log(`Value of i is ${index}`);
    
    
}
for (let index = 1; index <= 20; index++) {
    if (index==5){
        // console.log("5 is best number");
        continue 
    } 
    // console.log(`Value of i is ${index}`);
    
    
}


            // ---------------WHILE LOOP-----------------

let index = 0
 while (index <= 100){
    // console.log(`value of indes is ${index}`);
    index = index + 2
 }

let myArray1 = ["flash", "batman", "superman", "spiderman" ]
let arr = 0
while (arr < myArray1.length){
    // console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

let score = 1

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <=10);

//--------------------- FOR OF LOOP

const arr1 =[1,2,3,4,5,6,7,8,9,10]

for (const num of arr1) {
    //  console.log(num);
}


const greetings = "Hello, World!"
for (const greet of greetings) {
    // console.log(`Each Character is: ${greet}`);
    }

    //------------------ MAPS

const map = new Map() 
map.set("IN", "India")
map.set("PK", "Pakistan")
map.set("USA", "United state of America") 
map.set("Fr", "France")
map.set("IN", "India") // yai override hojye gi change nhi aye gi value 

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
