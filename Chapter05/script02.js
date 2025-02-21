var a = 3;
var b = 5;
console.log("Sum of " + a + " and " + b + " is " , (a + b));
console.log("Subtraction of " + a + " and " + b + " is " , (a - b));
console.log("Multiplication of " + a + " and " + b + " is " , (a * b));
console.log("Division of " + a + " and " + b + " is " , (a / b));
console.log("Modulus of " + a + " and " + b + " is " , (a % b));


var myValue ;

document.getElementById("para1").innerHTML = `value after variable declaration is  ${myValue}`;

var myValue02 = 5;


document.getElementById("para2").innerHTML = `“ Initial value : ${myValue02} ”`;

var myValue03 = 5;

var myValue04 = 7;

document.getElementById("para3").innerHTML = `“ value after increment is : ${++myValue03} ”`;

document.getElementById("para4").innerHTML = `“ value after addition  is : ${myValue03 + myValue04} ”`;

document.getElementById("para5").innerHTML = `“ value after decrement  is : ${--myValue03 + myValue04} ”`;

document.getElementById("para6").innerHTML = `“ The reminder is : ${(myValue03 + myValue04) % 3} ”`;

var myMovie =  600;

var myText = prompt("Enter Your Tickets Quantity");

var totalCost =  myMovie * myText;

console.log(totalCost)

document.getElementById("para7").innerHTML =`Total Cost to buy ${myText} tickets to a movie is 
${totalCost} PKR`;





