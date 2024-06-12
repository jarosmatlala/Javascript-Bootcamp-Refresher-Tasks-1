//declearing var..

let temperature = 17; 

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else if (temperature > 25) {
    console.log("It's warm.");}


    //QUESTION 2

    let temp = 17; 

    switch (true) {
        case (temp < 0):
            console.log("It's freezing!");
            break;
        case (temp >= 0 && temp <= 15):
            console.log("It's cold.");
            break;
        case (temp >= 16 && temp <= 25):
            console.log("It's mild.");
            break;
        case (temp > 25):
            console.log("It's warm.");
            break;
        default:
            console.log("Temperature out of range.");
            break;
    }

    //Excersise 2 

    //question 1

    let number = 20; 

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

//question 2

let num = 18; 

switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (num % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (numb % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

//Excersise 3

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//alculate the sum of all numbers from 1 to 100 and print the 

let sum1 = 0;

for (let i = 1; i <= 100; i++) {
    sum1 += i;
}

console.log("The sum of all numbers from 1 to 100 is:", sum1);

//const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, 


const numbrs = [1, 2, 3, 4, 5];

for (let i = 0; i < numbrs.length; i++) {
    console.log(numbrs[i]);
}

//  const numbers = [3, 7, 2, 5, 10, 6].Giventhe array of numbers, 



const numbers = [3, 7, 2, 5, 10, 6];
let maxNumber = numbers[0]; // Assume the first element is the maximum initially

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("The largest number in the array is:", maxNumber);

//Excercise 4 while loop

console.log("Task 1: Print numbers from 1 to 10");
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//1 and 20

console.log("\nTask 2: Print all even numbers between 1 and 20");
let j = 2;

while (j <= 20) {
    console.log(j);
    j += 2;
}

//sum from 1 to 100

console.log("\nTask 3: Calculate the sum of all numbers from 1 to 100 and print the result");
let sum = 0;
let k = 1;

while (k <= 100) {
    sum += k;
    k++;
}

console.log("The sum of all numbers from 1 to 100 is:", sum);

//Multiples of 5

console.log("\nTask 4: Print all multiples of 5 less than 50");
let num2 = 5;

while (num2 < 50) {
    console.log(num2);
    num2 += 5;
}


//Do while

console.log("\nExercise 5: Do While loop");
let x = 1;

do {
    console.log(x);
    x++;
} while (x <= 5);



