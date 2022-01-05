let b = 5
// let b = 9
// let b = 100
 function multiply(b) {
 return(b**2)
 }
 console.log()



//  function hello(params) {
//     return ("Hello, world")
//  }
//  console.log(hello())




 function hello() {
    return ('Hello, World!');
 }
 document.write(hello())

//  let num = 10
//  if(num <= 0){
//    console.log("true")
//   }
//   else console.log ("false");

let a = 10
let n = 10

  function sum(a,n) {
     if (a>=n) {
       console.log ("true")
     }
     else
     console.log ("false")
   }
sum (a,n);


let length = 6
let width = 7
function calculation(length, width) {
   console.log ((length + width)*2) 
}
calculation(length,width);

let z = 20
let y = 30

if (z > 50 || z > 30 && y == 30){
   console.log (true)
}
else console.log (false)


let  day  = 3
switch (day) {
    case 0:
        console.log("Today is Monday")
        break;
    case 1:
        console.log("Today is Tuesday")
        break;
    case 2:
        console.log("Today is Wednessday")
        break;
    case 3:
        console.log("Today is Thursday")
        break;
    case 4:
        console.log("Today is Friday")
        break;
    case 5:
        console.log("Today is Saturday")
        break;
    case 6:
        console.log("Today is Sunday")
        break;

    default:
        console.log("Please Confirm It Again")
        break;
}

let week = 3
switch (week){
   case 1:
console.log("Sunday")
break;
   case 2:
console.log("Monday")
break;
   case 3:
console.log("Tueseday")
break;
   case 4:
console.log("Wednessday")
break;
   case 5:
console.log("Thursday")
break;
   case 6:
console.log("Friday")
break;
   case 7:
console.log("Saturday")
break;
default:
   console.log("Check The Value")
}



// let age = 17
// switch(true){
//    case (age>18):
//    console.log("You can drive")
//    break;
//    default:
//       console.log("Sorry")
// }
let age = 25
switch (true) {
   case (age >=20 && age<=31):
      console.log("great job")
      break;

   default:
      console.log("Not Satesfied")
      break;
}
for(var t = 5; t<10; t++){

   console.log(t)
}


var exact = {
   firstName: "Muhammad",
   lastName:"Umair",
   age:26
}
let text = ""
for(var i in exact){
   text += exact[i]
   console.log(exact[i])
}

var f =[10,20,30,40,50]
var c= f.map(multiply)
console.log(c)

function multiply(x) {
    return x*10
}
var j= [
       {fname:"Muhammad", lname:"Umair", age:26},
       {fname:"Muhammad", lname:"Umar", age:25},
       {fname:"Muhammad", lname:"Amar", age:25},
       {fname:"Muhammad", lname:"Haris", age:24}
   ]
   var s =j.map(adding) 
   console.log(s)
   function adding(z) {
       return z.fname +" " + z.lname + " " + z.age
       
   }




// let age =22;
// switch (true) {
//     case (age >=15 && age<= 21):
//         console.log("You can drive")
//         break;
//     case(age >= 21 && age<= 30):
//         console.log("Why you want tp Drive");
//         break;
//     default:
//         console.log("Stay at home")
//         break;
// }





// let g = "Muhammad Umair";
// 
let g = undefined
if (g != undefined){
   throw new Error("Read it again");
}
else{
   console.log("Yes it is working")
}
try {
   null.console
   // mksflsk
   console.log("wait")
   // functionlove()
} catch (error) {
   console.log("Working")
   console.log(error)
   console.log(error.message)
}
finally{
   console.log("We are going to run it")
}

let people ={fName="Muhammad", lName ="Umair",age =26 }
let next = "";
for (let x in people){
   next+= people[fName] + " "
}