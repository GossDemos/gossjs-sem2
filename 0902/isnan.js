const a = "";

const r = (a !== a) ? '=NaN' 
        : (a === "") ? '=""' 
        : (a === undefined) ? '=undefined'
        : (a === null) ? '=null' 
        : (a === 0) ? '=0'
        : (a === false) ? '=false' : "other";

console.log(r);
