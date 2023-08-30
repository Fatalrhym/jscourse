/*let js = "amazing";
// console.log(40 + 50 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let country = "Turkey";
let continent = "Europe";
let population = 85000000;

console.log(country);
console.log(continent);
console.log(population);*/


/*
let javascriptIsFun = true;
console.log(javascriptIsFun)

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Joans");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1987;

console.log(year);

console.log(typeof null);

*/


/*
let age = 30;
age = 31;

const birthYear = 1987;
//birthYear = 1988; can never change

//const job = "cloud architect";

var job = "programmer";
job = "teacher";

lastName = "YAR"
console.log(lastName);
*/



/*
// Math operators
const now = 2037;
const ageFatih = now - 1987;
const ageJonas = now - 1991;
console.log(ageFatih, ageJonas);

console.log(ageFatih * 2, ageFatih / 2, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2


// Assignment OPerators
const firstName = "Fatih";
const lastName = "Yar";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 15
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);


// Comparison Operator
console.log(ageFatih > ageJonas);
console.log(ageFatih >= 18);

const isFullAge = ageFatih >= 18;
*/

/*
Operator Precedence
const now = 2037;
const ageFatih = now - 1987;
const ageJonas = now - 1991;

let x, y;
x = y = 25 - 10 - 5
console.log(x, y);

const averageAge = (ageJonas + ageFatih) / 2
console.log(ageFatih, ageJonas, averageAge);
*/

/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/

/*SOLUTION
Write your code below. Good luck! 🙂

const massMark = 78
const heightMark = 169
const massJohn = 92
const heightJohn = 195

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)
*/

/*
Strings and Template Literals

const firstName = "Fatih";
const job = "teacher";
const birthYear = 1987;
const year = 2023;
const fatih = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(fatih)

const fatihNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(fatihNew)

console.log("string with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`)
*/

/*
Taking Decisions: if / else Statements

const age = 15;
//const isOldEnough = age >= 18;
if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1987;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
*/

/*CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

SOLUTION

if(BMIMark>BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}
*/

/*
// "type convertion" and coercion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

// type coercion

console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old"); //same
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");


let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
// Truthy and Falsy Values

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Fatih"));
console.log(Boolean({}));

const money = 0; //Falsy
if (money) {
    console.log("Don't spend it all:)")
} else {
    console.log("You should get a job!")
}

let height; //undefined(falsy)
if (height) {
    console.log("YAY Height is defined")
} else {
    console.log("Height is UNDEFINED")
}
*/

/*
//Equality Operators
const age = "18";
if (age === 18) console.log("You just became an adult(strict)")
if (age == 18) console.log("You just became an adult(loose)")

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) {
    console.log("Cool 23 is amazing number!")
} else if (favorite === 7) {
    console.log("7 is also a cool number")
} else {
    console.log("Number is not 23 or 7")
}

if (favorite !== 23) { console.log("Why not 23?") }
*/

/*
//Boolean logic
// AND , OR, NOT

const hasDriversLicense = true;//A
const hasGoodVision = true;//B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive..")
}

const isTired = false;//C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive..")
}
*/

/*

CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
*/

/* SOLUTION */
/*
const scoreDolphins=96+108+89/3
const scoreKoalas=88+91+110/3

if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy")
} else if(scoreKoalas>scoreDolphins) {
    console.log("Koalas win the trophy")
} else {
    "Both win the trophy"
}

*/