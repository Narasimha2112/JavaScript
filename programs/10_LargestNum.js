// Find the largest of 3 numbers.

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));

document.writeln("You entered: " + num1 + ", " + num2 + ", " + num3 + "<br>");

let largest;
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}  

document.writeln("The largest number is: " + largest);
