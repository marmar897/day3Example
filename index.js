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
    for(index = 0; index< args.length; index++){
        console.log(args[index]);
    }
}
multiply(2,4);
multiply(1,2,3,4,5);

function sum(x, y, z){
    return x+ y+z;
}
const numbers = [1,2,3];

console.log(sum(...numbers));//spread operator
console.log("hello");

alert("test");

let t= document.getElementById("myDog");
let t1 = document.getElementsByClassName("dogs");
//console.log(array.isArray(t1));
let t2 = document.getElementsByTagName("h1");


//we can also be able to use querySelector, querySelectorAll
// searching using CSS selectors
/*

1.Class selector
2. id selector
3. tags/element selector


*/
//the querySelector will return the first eleemtn that matches the CSS selector
let t3 = document.querySelector(".dogs");
console.log(t3);
// there is onlyone returned here even tho theres multiple objects.

//querySelectorAll. this returns all elements that matches a specified CSS selector
let t4 = document.querySelectorAll(".dogs");
console.log(t4);
console.log(Array.isArray(t4));// output false 
//convert node list into array 
let arrayT4 = Array.from(t4);
console.log(Array.isArray(arrayT4));
//another way to get values into array
let arrayT4B = [...t4];
console.log(arrayT4B);

let x = document.getElementById("mydog").nextElementSibling;
console.log(x);

let y = document.getElementById("mydog").previousElementSibling;
console.log(y);

x.style.fontWeight = "bold";

let x1 = document.getElementById("mainbody");
x1.style.backgroundColor = "tan";

//create element

let newP = document.createElement("p");
newP.innerHTML= "this is our new paragraph";
//specify where i    ts added
//document..appendChild(newP);

/* JS events 
syntax for addEventListener
document.addEventListener(event, function, useCapture):
event: this specifies the name of the event 

function: this specifies the function that should run when the event occurs

the first and second parameters are required. you must provide the event and the function.

useCapture: boolean value that specifies whether the event should be 
executed in capturing and bubbling phrase. 
*/

// document.addEventListener("click", function(){
//     alert("today");
// } )

document.getElementById("mydog").addEventListener("click", test1);

function test1(){
    alert("bark bark!");
}

document.getElementById("myFriend").addEventListener("click", function (){
    test1("Dogs!");
});

document.getElementById("myform").addEventListener("submit", function(event){
    //alert("this form has been submitted");

    
    // we want to get a value that been entered by a user in a form
    let username = document.getElementById("username").value;
    // console.log(username.length);
    username = username.trim();
    console.log(username.length);
    let password = document.getElementById("password").value;
    password = password.trim();
    console.log(password.length);
    let confirmPassword = document.getElementById("confirmPassword").value;
    confrimPassword = confrimPassword.trim();
    console.log(confirmPassword.length);


    if(username.length ==0 || username == ""){
        document.getElementById("username").style.backgroundColor = 'red';
        alert("please enter a valid username");
    } else {
        document.getElementById("username").style.backgroundColor = 'white';
    }

    let formTitle = document.getElementById("title");
    formTitle.innerText = formTitle.innerText + "CMP 1000";
    console.log(formTitle.innerText);

    let newDiv = document.getElementById("newDiv");
    newDiv.innerText = newDiv.innerText + "CMP 1000";
    console.log(newDiv.innerText);
    //alert(username);
    event.preventDefault();
});