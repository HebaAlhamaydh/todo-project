//Enter name
var Name =prompt("Enter your Name Please");
//Enter gender
var Gender =prompt("Whats your Gender male or female?");
//Enter age
var Age=prompt("What is your Age?");
if(Age<=0 )
{
alert("Enter correct Age please!");
}
//skip welcome message confirm the message
var conf=confirm("If you want to skip the welcoming message press OK please!!");
//

if(Gender=="female")
{
    alert("welcome "+ Name+" "+ "Ms");
}
else if(Gender=="male")
{
    alert("welcome "+ Name+" "+ "Mr");   
}
else{
    alert("Welcome "+Name+" "+"to Website!!")
}


