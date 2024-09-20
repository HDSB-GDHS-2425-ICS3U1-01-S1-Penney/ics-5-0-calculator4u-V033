
// This will welcome users to the calculator and tell them what it can do

console.log("Hello! Welcome to The Simple Calculator :D");

console.log("With this calculator you'll be able to add, subtract, multiply, and divide!");

console.log("The following opperations are represented by the following symbols: Add = +, subtract = -, multiply= *, divide = /");

//This should (hopefully) get the users numbers

function getNumbers(){
    const num1 = parseFloat(prompt("Please enter your first number"));
    const num2 = parseFloat(prompt("Please enter your second number"));
    return [num1, num2];
}

//The operations the calculator will be preforming happen here. I also added handeling invalid inputs for some of the additional features :)

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return 'An error has occured! Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return 'Invalid opperator :(';
        }
        return result; 

    }

    function workCalculator () {

        const operator = prompt("What opperation would you like to do?");
        const [num1, num2] = getNumbers();

        const result = calculate(num1, num2, operator);
        console.log("The answer is: ");
        console.log(result);
    }

    //Actually starts the calculator
    workCalculator();




    










