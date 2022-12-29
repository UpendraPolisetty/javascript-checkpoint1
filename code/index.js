//1.Using loops take 10 inputs from user and find the average of all the numbers.
//Ans :- 
let sum =0;
let count = 0;

for(i=0;i<=10;i++){
  let inputs = +prompt(`Please Enter inputs`);
  sum += inputs;
  console.log(sum);
  count++;
  
}
let average =sum/count;
console.log(average);

//2.What will be the output of the code below
let i = 0;
while (i < 3) {
  println('hi');
  i++;
}
//Ans :- It will throw an Reference error because we don't have the property of println in java

//3.Write a function named getEvenSum that accepts a parameter max. Return the sum of all even numbers. The value of max should default to 10.
//Ans :- 
 function getEvenSum(max=10){
  let sum = 0;
  for(i=0;i<=max;i++){
    if(i%2==0){
      sum += i
    }
  }
  return sum;
 }

//4.Write a function named getOddSum that accepts a parameter max. Return the sum of all odd numbers. The value of max should default to 10.
//Ans :- 
function getOddSum(max=10){
  let sum = 0;
  for(i=0;i<=max;i++){
    if(i%2 != 0){
      sum += i
    }
  }
  return sum;
 }

//5.Write a function named getProductOfDigits that accepts a parameter num. It returns the product of all the digits in the number.
//Ans :-
function getProductOfDigits(num){
  let product = 1;
  let i =1
  while(i<=num){
    
    i++;
  }
  return product *i
}
getProductOfDigits()

function getProductOfDigits(num){
  let product = 1;
  for(i=1;i<num;i++){
    product = product * i
  }
  return product;
}
getProductOfDigits()

//If the input value is less than 0 return not a valid input
//For example if the input is 123 output should be 6.
//6.What will be the output of the following code below in multiple conditions? Explain with reason?
function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // 'Bigger than 5' Here the number 10 is bigger than 5 so it will return the output.
check(1); // 'Smaller than 5' Here the number 1 is smaller than 5 so it will return the output. 
check(5); // 5 Here the numberr is equaal to 5 so it will return the num 5
//7.What will be the output of the following code given below? Explain the reason?
function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // 'You are Arya' Here we are checking the condition for name === 'Arya' so it will return the output 
getOutput('John'); // 'You are John'  Here we are checking the condition for name === 'John' so it will return the output 
getOutput(); // 'Who are you' Here we are returning the value to the function. Since there id no value inside the function it returns 'Who are you'

 
//9. Can a function have multiple return statement? Give one example if possible and explain the reason.
//Ans :-No, A single function cannot have the multiple return statements. If there may be it will only return the first return statement

//10. What is the difference between 'for loop' and 'while loop'. What are the different place you can use them? Explain with example.

//Ans :-  
 for (i=0;i<=10;i++){
    console.log(i);
 }

 let num = 0;
while(num<=10){
  console.log(num);
  num++;
}

  