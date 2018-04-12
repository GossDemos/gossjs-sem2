const age = process.argv[2];
const restricted = ( age < 18 ) ? 'yes' : ( age === "18" ) ? 'not sure' : 'no' ;
console.log( restricted );
