const Htmlprogram =[
    {
        name:"JavaScript Program To Print Hello World",
        program:
        `
        console.log('Hello World');
        `,
        output:
        `
        Hello World
        `

    },
    {
        name:"JavaScript Program to Add Two Numbers",
        program:
        `
        const num1 = 10;
        const num2 = 20;
        
        // add two numbers
        const sum = num1 + num2;
        
        // display the sum
        console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
        `,
        output:
        `
        The sum of 10 and 20 is: 30
        `

    },
    {
        name:"JavaScript Program to Find the Square Root",
        program:
        `
        // take the input from the user
        const number = prompt('Enter the number: ');
        
        const result = Math.sqrt(number);
        console.log('The square root is :');
        `,
        output:
        `
        Enter the number: 16 
        The square root is : 4
        `

    },
    {
        name:"JavaScript Program to Calculate the Area of a Triangle",
        program:
        `
        const baseValue = prompt('Enter the base of a triangle: ');
        const heightValue = prompt('Enter the height of a triangle: ');
        
        const areaValue = (baseValue * heightValue) / 2;

         console.log(
             'The area of the triangle is $ {areaValue}'
         );
        `,
        output:
        `
         Enter the base of a triangle: 4
         Enter the height of a triangle: 6
         The area of the triangle is 12
        `

    },
    {
        name:"JavaScript Program to Swap Two Variables",
        program:
        `
        //JavaScript program to swap two variables

       //take input from the users
       let a = prompt('Enter the first variable: ');
       let b = prompt('Enter the second variable: ');

       //create a temporary variable
       let temp;

       //swap variables
       temp = a;
       a = b;
       b = temp;

       console.log('The value of a after swapping: $ {a}');
       console.log('The value of b after swapping: $ {b}');
        `,
        output:
        `
        Enter the first variable: 6
        Enter the second variable: 8
        The value of a after swapping: 8
        The value of b after swapping: 6
        `

    },
    {
        name:"JavaScript Program to check odd or even number",
        program:
        `
        const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
        `,
        output:
        `
        Enter a number: 9
        The number is odd.
        `

    },
    {
        name:"JavaScript Program to check  Largest Number Among Three Numbers",
        program:
        `
        // take input from the user
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));
        const num3 = parseFloat(prompt("Enter third number: "));
        let largest;
        
        // check the condition
        if(num1 >= num2 && num1 >= num3) {
            largest = num1;
        }
        else if (num2 >= num1 && num2 >= num3) {
            largest = num2;
        }
        else {
            largest = num3;
        }
        
        // display the result
        console.log("The largest number is " + largest);
        `,
        output:
        `
        Enter first number: 70
        Enter second number: 95
        Enter third number: 108
        The largest number is 108
        `

    },
    {
        name:"JavaScript Program to check prime number",
        program:
        `
        // take input from the user
        const number = parseInt(prompt("Enter a positive number: "));
        let isPrime = true;
        
        // check if number is equal to 1
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }
        
        // check if number is greater than 1
        else if (number > 1) {
        
            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                console.log(' $ {number} is a prime number');
            } else {
                console.log('$ {number} is a not prime number');
            }
        }
        
        // check if number is less than 1
        else {
            console.log("The number is not a prime number.");
        }
        `,
        output:
        `
        Enter a positive number: 23
        23 is a prime number.
       
        `

    },
    {
        name:"JavaScript Program to Find the Factorial of a Number",
        program:
        `
        // take input from the user
        const number = parseInt(prompt('Enter a positive integer: '));
        
        // checking if number is negative
        if (number < 0) {
            console.log('Error! Factorial for negative number does not exist.');
        }
        
        // if number is 0
        else if (number === 0) {
            console.log('The factorial of $ {number} is 1.');
        }
        
        // if number is positive
        else {
            let fact = 1;
            for (i = 1; i <= number; i++) {
                fact *= i;
            }
            console.log('The factorial of $ {number} is $ {fact}.');
        }
        `,
        output:
        `
        Enter a positive integer: 5
        The factorial of 5 is 120.
       
        `

    },
    {
        name:"JavaScript Program to Find the Fibonacci Series Up to n Terms",
        program:
        `
        // take input from the user
        const number = parseInt(prompt('Enter the number of terms: '));
        let n1 = 0, n2 = 1, nextTerm;
        
        console.log('Fibonacci Series:');
        
        for (let i = 1; i <= number; i++) {
            console.log(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        `,
        output:
        `
        Enter the number of terms: 4
        Fibonacci Series:
        0
        1
        1
        2
       
        `

    },
    {
        name:"JavaScript Program to Check Armstrong Number",
        program:
        `
       
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log('$ {number} is an Armstrong number');
}
else {
    console.log('$ {number} is not an Armstrong number.');
}
        `,
        output:
        `
        Enter a three-digit positive integer: 153
        153 is an Armstrong number.
       
        `

    },
    {
        name:"JavaScript Program to Find LCM",
        program:
        `
        // take input
        const num1 = prompt('Enter a first positive integer: ');
        const num2 = prompt('Enter a second positive integer: ');
        
        // higher number among number1 and number2 is stored in min
        let min = (num1 > num2) ? num1 : num2;
        
        // while loop
        while (true) {
            if (min % num1 == 0 && min % num2 == 0) {
                console.log('The LCM of $ {num1} and $ {num2} is $ {min}');
                break;
            }
            min++;
        }
        `,
        output:
        `
        Enter a first positive integer: 6
        Enter a second positive integer: 8
        The LCM of 6 and 8 is 24
       
        `

    },
]

export default Htmlprogram