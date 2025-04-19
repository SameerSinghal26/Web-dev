// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB connected`);
})(); // semicolon is important to stop the function 

// Global scope ke pollution ko hatane ke liye we use iife (varaible ko hatane ke liye..)

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();

( function aurcode() {
    console.log(`DB CONNECTED THREE`);
}) ();

( (name) => {
    console.log(`DB CONNECTED FOUR ${name}`);
}) ('Sameer');
