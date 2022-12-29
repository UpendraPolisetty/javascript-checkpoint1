//1.What is the difference between null and undefined

/*2.You have a variable named userAge with a value of NaN. Write an if condition to check if the value of userAge is NaN or not. 
If the value is NaN alert message The value is NaN otherwise alert Sorry the value if not NaN.*/

// Ans :
 function check(){
   let  userAge = NaN;
 }

 /*3.We have two variables user1 and user2. Write an if condition to check if they are equal or not. 
 If they are alert Both values are equal or else alert Both value are not equal. Explain why they are equal or not equal.*/

 //Ans :
 let user1 = 'Sameer';
 let user2 = 'sameer';

 function checkEqual(){
    if(user1==user2){
        alert(`Both values are equal`);
    } else {
        alert(`Both value are not equal`)
    }
 }

 checkEqual(); // `Both value are not equal`

//4.  What will be the output of the code below?
 function sum(a, b) {
   return a + b;
 }
 
 sum(1, '2'); // 12

//5.  What will be the output of the code below?
let number = 0;
console.log(number++); // 0
console.log(++number); // 2
console.log(number); // 2   

//6. What will be the output/issue in the given code below?
function getAge() {
    age = 21;
    console.log(age);
  }
  getAge(); // 21
  
  // 7.What will be the output of the code below?


  function sayHi() {
    function add() {
      return 21;
    }
    return add();
  }
  
  console.log(typeof sayHi());// number

 //8. Next to each line given below write condition or loop based on what will be used in solving.

//=> List numbers from 1 to 100
  for(i=1;i<=100;i++){
    console.log(i);
  }

//=> Check if the number id odd or even
  let oddEven = (num)=>{
    if(num %2 ==0){
      alert(`Even`);
    } else {
      alert(`odd`)
    }
  }

//=> Keep buying phone if the total amount is less than 20000. Only buy accessories if the total amount id less than 10000

// let totalAmount = 20000;
// let phone_price = 10000;
// for(i=phone_price;i<totalAmount;i++){
//   if(i<totalAmount){
//     console.log(i);
//   }
//   let accessories =1000;
//   if(accessories<10000){
//     accessories++
//   }

// }

//=> List all the even values from 0 to 100

for(i=0;i<=100;i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

//=> List all the odd values from 0 to 100
for(i=0;i<=100;i++){
  if(i % 2 != 0){
    console.log(i);
  }
}

//=> Drink a glass of water when you are thirsty

function drink(glass){
  if(glass=="thirsty"){
    alert(`Drink a glass of water when you are thirsty`)
  }
}

/*=>9. Write a function that accepts the name of a product like phone, laptop, watch, tv or tablet.
Based on the input return the price of the product. (You can choose any price you want). What will you use to solve this switch or if..else
 Explain your reason of why to use user one over another.*/

 // SOLUTION : 
  
 let product = prompt("Please enter your product name");

 switch(true){
  case product=="phone" :
    alert(`it will cost of 20000 RS`);
    break;
  case product=="laptop" :
    alert(`it will cost of 80000 RS`);
    break;
  case product=="watch" :
    alert(`it will cost of 10000 RS`);
    break;
  case product=="tv" :
    alert(`it will cost of 60000 RS`);
    break;
  case product=="tablet" :
    alert(`it will cost of 15000 RS`);
    break;
    default :
    alert( `give valid input`)
 };


 //=> 10. What will be the output of the following lines of code given below?

function add(a, b) {
  return a + b;
}
console.log( typeof typeof add(21, 22)); // Output
console.log( typeof typeof add(21, '22')); // Output

console.log( typeof typeof typeof add(100, true)); // Output
console.log( typeof add(100 || true, 12 && 21)); // Output
console.log( typeof add(100 || true, 12 && 21 && 0)); // Output
console.log( typeof add); // Output
console.log( typeof typeof add); // Output