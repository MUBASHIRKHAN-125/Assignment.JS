var Number = prompt("Enter Number and Check Positive or Negative and Zero");
var Check0 = parseInt(Number.trim()); 
if(Check0 > 0){
    document.getElementById("big1").innerHTML = `Ans: This is a Positive Number : ${Check0} ;`
}else if(Check0 < 0){
  document.getElementById("big2").innerHTML = `Ans: This is a Negative Number : ${Check0} ;`
}else if(Check0 == 0){
      document.getElementById("big3").innerHTML = `Ans: This is a Zero Number : ${Check0} ;`
}else{
      document.getElementById("big03").innerHTML = `Empty Prompt!`;
}

var checkNumber = prompt("Write a number to check even or odd");
var Check01 = parseInt(checkNumber.trim()); 
if(Check01 % 2 == 0){
    document.getElementById("big4").innerHTML = `Ans: This is a Even Number : ${Check01} ;`
}else if(Check01 % 2 == 1){
      document.getElementById("big5").innerHTML = `Ans: This is a Odd Number : ${Check01} ;`
}else{
     document.getElementById("big05").innerHTML = `Empty Prompt!`;
}

var votingAgeCheck = prompt("Enter your age and Check Eligible vote Criteria");
var Check02 = parseInt(votingAgeCheck.trim()); 
if(Check02 >= 18){
    document.getElementById("big6").innerHTML = `Ans: congrats your eligible of voting : ${Check02} Age ;`
}else if(Check02 < 18){
      document.getElementById("big7").innerHTML = `Ans: Sorry you are not eligible for voting : ${Check02} Age;`
}else{
     document.getElementById("big07").innerHTML = `Invalid input or empty! Please enter a valid age`;
}

var firstNumber = prompt("Enter first number please second prompt fill:");
var Check03 = parseInt(firstNumber.trim());
var secondNumber = prompt("Enter second number then check greater number:");
var Check04 = parseInt(secondNumber.trim());
if(Check03 > Check04){
    document.getElementById("big8").innerHTML = `Ans: The larger number is : ${Check03} ;`
}else if(Check03 < Check04){
      document.getElementById("big9").innerHTML = `Ans: The larger number is : ${Check04} ;`
}else if(Check03 == Check04){
    document.getElementById("big10").innerHTML = `Ans: Both numbers are equal.` ;
}else{
    document.getElementById("big010").innerHTML = `Empty Prompt!` ;
}

var agrUser = prompt("Please enter your age and check discount criteria");
var Check05 = parseInt(agrUser.trim());
if(Check05 >= 60){
    document.getElementById("big11").innerHTML = `Ans: Congrats you are Eligible for  discount and membership card : ${Check05} Age ;`
}else if(Check05 < 59){
      document.getElementById("big12").innerHTML = `Ans: Sorry you are not eligible for  discount : ${Check05} Age ;`
}else{
     document.getElementById("big012").innerHTML = `Empty Prompt!`;
}

var yourName = prompt("Enter your Name");
var yourPassword = prompt("Enter your Password");
var myName = "admin";
var myPassword = 12345;
if(yourName == myName  &&  yourPassword == myPassword)
{ 
    document.getElementById("big13").innerHTML = `Login successful`;
}else{
    document.getElementById("big14").innerHTML = `"Invalid credentials"`;
}
   
var yourGrade = prompt("Enter your Marsks and check Grade");
var Check06 = parseInt(yourGrade.trim());
if(Check06 >= 90 && Check06 <= 100)
{ 
    document.getElementById("big15").innerHTML = `Ans: Excellent you grade is "A"`;
}else if(Check06 >= 80 && Check06 <= 89){
    document.getElementById("big16").innerHTML = `Ans: Verygood you grade is "B";`
}else if(Check06 >= 70  && Check06 <= 79){
    document.getElementById("big17").innerHTML = `Ans: Good you grade is "C";`
}else if(Check06 >= 60 && Check06 <= 69){
    document.getElementById("big18").innerHTML = `Ans: Not bad you grade is "D";`
}else if(Check06 <= 59){
    document.getElementById("big19").innerHTML = `Ans: You are Fail but (Failure is not the opposite of success. It is Part of Success) "F";` 
}else if(Check06 > 100){
    document.getElementById("big0019").innerHTML = `INVALID NUMBER;` 
}
else{
    document.getElementById("big019").innerHTML = `Empty Prompt!`;
}

var lightCheck = prompt("red, yellow, or green, enter your write any color and check result").trim();

if(lightCheck.toLowerCase() == "Red".toLowerCase())
{ 
     document.getElementById("big20").innerHTML = `"Stop!"`;
}else if(lightCheck.toLowerCase() == "Yellow".toLowerCase()){
    document.getElementById("big21").innerHTML = `"Slow down!"`;
}else if(lightCheck.toLowerCase() == "Green".toLowerCase()){
    document.getElementById("big22").innerHTML = `"Go!"`;
}else{
    document.getElementById("big23").innerHTML = `"Not Matched Color!"`;
 }