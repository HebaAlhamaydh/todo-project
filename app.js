// //Enter name
// var Name =prompt("Enter your Name Please");
// //Enter gender
// var Gender =prompt("Whats your Gender male or female?");
// //Enter age
// var Age=prompt("What is your Age?");
// if(Age<=0 )
// {
// alert("Enter correct Age please!");
// }
// //skip welcome message confirm the message
// var conf=confirm("If you want to skip the welcoming message press OK please!!");
// //

// if(Gender=="female")
// {
//     alert("welcome "+ Name+" "+ "Ms");
// }
// else if(Gender=="male")
// {
//     alert("welcome "+ Name+" "+ "Mr");   
// }
// else{
//     alert("Welcome "+Name+" "+"to Website!!")
// }


///////Validation function////
function validationInput(inputUser)
{
   let resultInput;

     
    if (inputUser=="Yes") {
         resultInput="Yes";
   }
   else if(inputUser=="No")
   {   resultInput="No";}
   else
    resultInput="invalid"; 

   return resultInput;
}

//////print fuction////
function printArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
    console.log(arr[i]);
   }
}
//////Question//////
let Nationality =prompt("Are you Jordanian a list (Yes/No)?");
let Age =prompt("Are you between 20 and 35 years old a list (Yes/No)?");
let Like =prompt("Do you like this website a list (Yes/No)?");

let answerNationality=validationInput(Nationality);
let answerAge=validationInput(Age);
let answerLike=validationInput(Like);

 let finalArray=[];
 finalArray.push(answerNationality);
 finalArray.push(answerAge);
 finalArray.push(answerLike);
 

 printArray(finalArray);

 
 






