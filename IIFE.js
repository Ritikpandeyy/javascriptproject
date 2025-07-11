// Imediately invoked Function Expression (IIFE)
(function chai(){ // this is an named IIFE
    console.log(`DB CONNECTED`);
})(); // this is an IIFE it will run as soon as the file is loaded and it will not be stored in memory

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);

})('hitesh')
