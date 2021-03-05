console.log("hellooo....")

console.log("cars")

let d = 78

console.log(d)

// variables
let m = "Mark"

console.log(m)
let a = 5
let b = 9
console.log(a + b);
console.log(a * b)

let surname = "JOJO "
let firstname = "JOE"
console.log(surname + firstname)



// Arrays and Object 
// Arrays (list of items or names)
let myarray = [6, 4, 10, 3, 4, 5, 6]
let names = ["kofi", "kwasi", "amma"]
let mymixed = [0, 4, 6, "you", "yam", "banana"]

// the first element's index is zero.0 
console.log(myarray[2]);
console.log(myarray[3]);
console.log()

// take somethig off use myarray.pop()
myarray.push(50)
console.log(myarray);
// use myarray.splice ... to remove a specific range

// Objects (one thing with several properties)
let myobject = {
    name: "Kofi", classname: "Marry Gold", results: [
        { subject: "English", mark: 40, position: 1 },
        { subject: "Maths", mark: 80, position: 4 },
        { subject: "Social", mark: 50, position: 3 },
    ]
}


// Functions
function add(num1, num2) {
    console.log(num1+num2);
}
add(3,4)


function subtract(num1,num2) {
    console.log(num1-num2)
}
subtract(4,9)

function login(username,password){
    console.log( username+"::" +password )
}
login("jeje","jdjdj")

function multiply(num1,num2){
    return num1+num2
}
console.log(multiply(5,9))
// when you use return , you'll have to console.log the function or you can make it a variable then console.log() it

function divide(num1,num2){
    return num1/num2
}
let ans=divide(9,3)
console.log(ans)

// Use document.write() to type html codes on the DOM


//DOM manupulation

let button = document.getElementById("btn")
//console.log(username);

button.addEventListener(
    "click",function(){
        // or "click",()>>{
    let username = document.getElementById("username")
   // or let username = document.querySelector("username")
    let password = document.getElementById("password")
   // oe let password = document.querySelector("password")
    
    console.log(username.value,password.value) // which can also be writen  us console.log() respectively
    alert(usernamw.value+" "+password.value);
}
)


// Display username dynamically
let displaybutton = document.getElementById("displaybutton")
displaybutton.addEventListener("click", function(){
    let username = document.getElementById("username")
    let h1 = document.getElementById("h1")
    h1.innerHTML = username.value
}

)