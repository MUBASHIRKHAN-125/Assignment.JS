var childTicket = prompt("please enter your age then check  eligible for child Ticket");
var teenTicket  =  prompt("please enter your age then check  eligible for teen Ticket");
var adultTicket = prompt("please enter your age then check  eligible for adult Ticket");
var seniorTicket =  prompt("please enter your age then check  eligible for senior Ticket");

if(childTicket < 12){
alert( "You are eligible for a Child Ticket.");
console.log("You are eligible for a Child Ticket.");
}else{
alert("You are not eligible for a Child Ticket.");
console.log("You are not eligible for a Child Ticket.");
}

if(teenTicket == 12 || 17){
    alert( "You are eligible for a Teen Ticket.");
     console.log("You are eligible for a Teen Ticket.");
}else{
    alert("You are not eligible for a Teen Ticket.");
    console.log("You are not eligible for a Teen Ticket."); 
}

if(adultTicket == 18 || 64){
    alert( "You are eligible for an Adult Ticket.");
    console.log( "You are eligible for an Adult Ticket.");
}else{
    alert("You are not eligible for a Adult Ticket.");
    console.log("You are not eligible for a Adult Ticket."); 
}

if(seniorTicket >= 65){
    alert("You are eligible for a Senior Ticket.");
  console.log("You are eligible for a Senior Ticket.");
}else{
    alert("You are not eligible for a Senior Ticket.");
    console.log("You are not eligible for a Senior Ticket."); 
}