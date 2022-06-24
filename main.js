let num1 = prompt("Enter First number", "");
let sign = prompt("Enter operation sign", "");
let num2 = prompt("Enter Second number", "");

let addition = Number(num1) + Number(num2);
let subtraction = Number(num1) - Number(num2);
let multiplication = Number(num1) * Number(num2);
let division = Number(num1) / Number(num2);
let module = Number(num1) % Number(num2);


if (sign == '+') {
    alert(`The answer is ${addition}`)
} else if (sign == '-') {
    alert(`The answer is ${subtraction}`)
} else if (sign == '*') {
    alert(`The answer is ${multiplication}`)
} else if (sign == '/') {
    alert(`The answer is ${division}`)
} else if (sign == '%') {
    alert(`The answer is ${module}`)
}