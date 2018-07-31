/************************************
* Basic Operators
*/

// Math Operators
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder;
johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof x);

/************************************
* Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var averageAge = (ageJohn + ageMark) / 2;
console.log(averageAge);

// Multiple asignments
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x += 1;
console.log(x);
x++; // sames as the above, adds 1 incrementally to the variable x //
console.log(x);
x--;
console.log(x);

/************************************
* CODING CHALLENGE 1
*/

var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI;
markMass = 80;
markHeight = 180;
johnMass = 70;
johnHeight = 185;
markBMI = markMass / ( markHeight * markHeight );
johnBMI = johnMass / ( johnHeight * johnHeight );

var bmiQuestion = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s?'  + bmiQuestion);
