/* rest and spread 
rest(...)
spread (...)
*/
//the following function multiplies numbers passed in the 
function multiply(...args){ // rest operator
    //body
    //console.log(args);
    for(let i in args){
        console.log(args[i]);
    }
    for(index = 0; index< args.length; i++){
        console.log(args[i]);
    }
}
multiply(2,4);
multiply(1,2,3,4,5);

function sum(x, y, z){
    return x+ y+z;
}
const numbers = [1,2,3];

console.log(sum(...numbers));//spread operator
