// Values and Operators
// (Discuss this block)
// What will be the output of the code given? Explain with reason.
let sum = prompt(`What will be the result of 12 + 12?`);

if (sum == 24) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
};
2.

// If we change sum == 24 to sum === 24 in the code snipped above will the output change?
// If yes what will be the new output and why?'

// Ans : it will gives you always `sorry you are wrong!` because it will check data types

// If no why?
// What will be the output if we replace == with ||?

//Ans: it will checks true value so it always gives `Hurray 🔥 You are right!`

// What will be the output if we replace == with &&?

//Ans: it will checks false value so it always gives `Hurray 🔥 You are right! because it takes last fasle value`

// What will be the output if we change the sum == 24 to String(sum == 24) like given? Explain why?

//Ans: it will make implicit conversion String to number so it always gives `Hurray 🔥 You are right!`

// What will be the output of the code given? Explain why?
let sum = prompt(`What will be the result of 12 + 12?`);

if (String(sum != 24)) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
}
// In which of the following case implicit type conversion will take place and why? Write output each code snippet.
21 + prompt('Enter a number');
// 👉 Your answer : 21+"22" = 43

prompt('Enter first number') +
  prompt('Enter second number');
// 👉 Your answer : "22"+"28"=2228

function sum(a, b) {
  return a + b;
}

'21' + sum(21, 10);
// 👉 Your answer : '21'+31 = 52

function sum(a, b) {
  return a + b;
}
alert('Hello') + sum(10, 10); // what will this return NaN
// 👉 Your answer : it alerts Hello and gives NaN

undefined + 21;
// 👉 Your answer : NaN

44 && 'Hello' && 'Arya' + 'Stark' || 100;
// 👉 Your answer : Arya Stark

// What will be the output of code below?
alert( null || 2 || undefined );//2