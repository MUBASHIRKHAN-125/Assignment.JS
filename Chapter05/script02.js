///Question1////
var a = 3;
var b = 5;
console.log("Sum of " + a + " and " + b + " is " , (a + b));
console.log("Subtraction of " + a + " and " + b + " is " , (a - b));
console.log("Multiplication of " + a + " and " + b + " is " , (a * b));
console.log("Division of " + a + " and " + b + " is " , (a / b));
console.log("Modulus of " + a + " and " + b + " is " , (a % b));
///////

///Question2////
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
///////

///Question3////
var myMovie =  600;

var myText = prompt("Enter Your Tickets Quantity");

var totalCost =  myMovie * myText;

console.log(totalCost)

document.getElementById("para7").innerHTML =`Total Cost to buy ${myText} tickets to a movie is 
${totalCost} PKR`;

///////

///Question8////
var userVaraiable01 = prompt("Enter your Total Marks");
var userVaraiable02 = prompt("Enter your Obtained Marks");

document.getElementById("para8").innerHTML = `Total Marks: ${userVaraiable01}%`;
document.getElementById("para9").innerHTML = `Marks Obtained: ${userVaraiable02}%`;
document.getElementById("para10").innerHTML = `Percentage: ${(userVaraiable02 / userVaraiable01)* 100}%`;
///////

///Question11////
var userYear = prompt("Enter your Current year");
var userAge = prompt("Enter your Birth year");

document.getElementById("para11").innerHTML = `Current Year: ${userYear}`;
document.getElementById("para12").innerHTML = `Birth Year: ${userAge}`;
document.getElementById("para13").innerHTML = `Your Age is: ${(userYear - userAge)}`;
///////

///Question5////
var userTable01 = prompt("Enter a any number to display its multiplication table (up to 10):");;
document.getElementById("para14").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>1</th><th>=</th><th>${userTable01 * 1}</th></tr>`;
document.getElementById("para15").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>2</th><th>=</th><th>${userTable01 * 2}</th></tr>`;
document.getElementById("para16").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>3</th><th>=</th><th>${userTable01 * 3}</th></tr>`;
document.getElementById("para17").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>4</th><th>=</th><th>${userTable01 * 4}</th></tr>`;
document.getElementById("para18").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>5</th><th>=</th><th>${userTable01 * 5}</th></tr>`;
document.getElementById("para19").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>6</th><th>=</th><th>${userTable01 * 6}</th></tr>`;
document.getElementById("para20").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>7</th><th>=</th><th>${userTable01 * 7}</th></tr>`;
document.getElementById("para21").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>8</th><th>=</th><th>${userTable01 * 8}</th></tr>`;
document.getElementById("para22").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>9</th><th>=</th><th>${userTable01 * 9}</th></tr>`;
document.getElementById("para23").innerHTML = `<tr><th> ${userTable01}</th><th>x</th><th>10</th><th>=</th><th>${userTable01 * 10}</th></tr>`;
////////