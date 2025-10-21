// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
                    //Named Iife
(function chai() {
    console.log(`DB CONNECTED`);
} )();
                    //UnNamed iife
( (name) => {
    console.log(`DB DISCONNECTED Two ${name}`);
})("RAhim")