// var c= 300
let a= 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    //console.log("Inner: ", a)
}
 
// console.log(a);
// console.log(b);
// console.log(c);
              
                      //nested scoop
function one(){
    const username  = "Rahim"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Rahim"
    if (username === "Rahim"){
        const website = " Youtube"
       // console.log(username + website);
    }
    
   // console.log(username);
}


//+++++++++++++++++++++++ Intertesting ++++++++++++++++===

addone(5)
function addone(num){
    return num + 1;
    
}

const addTwo = function(num){
    return num + 2;
}

addTwo(5) // -----------> agr mai is ko uper lai jaun ga function sey pehly you error aye ga