const JavaProgram = [
    {
        name:"Java Program to Print an Integer (Entered by the User)",
        program:
        `
        import java.util.Scanner;

        public class HelloWorld {
        
            public static void main(String[] args) {
        
                // Creates a reader instance which takes
                // input from standard input - keyboard
                Scanner reader = new Scanner(System.in);
                System.out.print("Enter a number: ");
        
                // nextInt() reads the next integer from the keyboard
                int number = reader.nextInt();
        
                // println() prints the following line to the output screen
                System.out.println("You entered: " + number);
            }
        }
        `,
        output:
        `
        Enter a number: 102
        You entered: 102
        `

    }, 
     {
        name:"Java Program to Add Two Integers",
        program:
        `
        class Main {

            public static void main(String[] args) {
              
              System.out.println("Enter two numbers");
              int first = 10;
              int second = 20;
              
              System.out.println(first + " " + second);
          
              // add two numbers
              int sum = first + second;
              System.out.println("The sum is: " + sum);
            }
          }
        `,
        output:
        `
        Enter two numbers
        40 60
        The sum is: 100
        `

    }, 
     {
        name:"Java Program to Find ASCII Value of a character",
        program:
        `
        public class AsciiValue {

            public static void main(String[] args) {
        
                char ch = 'a';
                int ascii = ch;
                // You can also cast char to int
                int castAscii = (int) ch;
        
                System.out.println("The ASCII value of " + ch + " is: " + ascii);
                System.out.println("The ASCII value of " + ch + " is: " + castAscii);
            }
        }
        `,
        output:
        `
        The ASCII value of a is: 97
        The ASCII value of a is: 97
        `

    }, 
     {
        name:"Java Program to Swap Two Numbers",
        program:
        `
        public class SwapNumbers {

            public static void main(String[] args) {
        
                float first = 1.20f, second = 2.45f;
        
                System.out.println("--Before swap--");
                System.out.println("First number = " + first);
                System.out.println("Second number = " + second);
        
                // Value of first is assigned to temporary
                float temporary = first;
        
                // Value of second is assigned to first
                first = second;
        
                // Value of temporary (which contains the initial value of first) is assigned to second
                second = temporary;
        
                System.out.println("--After swap--");
                System.out.println("First number = " + first);
                System.out.println("Second number = " + second);
            }
        }
        `,
        output:
        `
          --Before swap--
          First number = 1
          Second number = 2
          --After swap--
          First number = 2
          Second number = 1
        `

    }, 
     {
        name:"Java Program to Check Whether a Number is Even or Odd",
        program:
        `
        import java.util.Scanner;

        public class EvenOdd {
        
            public static void main(String[] args) {
        
                Scanner reader = new Scanner(System.in);
        
                System.out.print("Enter a number: ");
                int num = reader.nextInt();
        
                if(num % 2 == 0)
                    System.out.println(num + " is even");
                else
                    System.out.println(num + " is odd");
            }
        }
        `,
        output:
        `
        Enter a number: 18
        18 is even
        `

    }, 
     {
        name:"Java Program to Find the Largest Among Three Numbers",
        program:
        `
        public class Largest {

            public static void main(String[] args) {
        
                double n1 = -2.5, n2 = 5.7, n3 = 4.5;
        
                if( n1 >= n2 && n1 >= n3)
                    System.out.println(n1 + " is the largest number.");
        
                else if (n2 >= n1 && n2 >= n3)
                    System.out.println(n2 + " is the largest number.");
        
                else
                    System.out.println(n3 + " is the largest number.");
            }
        }
        `,
        output:
        `
        5.7 is the largest number.
        `

    },
      {
        name:"Java Program to Check Leap Year",
        program:
        `
        public class Main {

            public static void main(String[] args) {
          
              // year to be checked
              int year = 1996;
              boolean leap = false;
          
              // if the year is divided by 4
              if (year % 4 == 0) {
          
                // if the year is century
                if (year % 100 == 0) {
          
                  // if year is divided by 400
                  // then it is a leap year
                  if (year % 400 == 0)
                    leap = true;
                  else
                    leap = false;
                }
                
                // if the year is not century
                else
                  leap = true;
              }
              
              else
                leap = false;
          
              if (leap)
                System.out.println(year + " is a leap year.");
              else
                System.out.println(year + " is not a leap year.");
            }
          }
        `,
        output:
        `
        1900 is not a leap year.
        `

    }, 
     {
        name:"Java Program to Find Factorial of a Number",
        program:
        `
        public class Factorial {

            public static void main(String[] args) {
        
                int num = 10;
                long factorial = 1;
                for(int i = 1; i <= num; ++i)
                {
                    // factorial = factorial * i;
                    factorial *= i;
                }
                System.out.printf("Factorial of %d = %d", num, factorial);
            }
        }
        `,
        output:
        `
        Factorial of 10 = 3628800
        `

    },
      {
        name:"Java Program to Display Fibonacci Series",
        program:
        `
        class Main {
            public static void main(String[] args) {
          
              int n = 10, firstTerm = 0, secondTerm = 1;
              System.out.println("Fibonacci Series till " + n + " terms:");
          
              for (int i = 1; i <= n; ++i) {
                System.out.print(firstTerm + ", ");
          
                // compute the next term
                int nextTerm = firstTerm + secondTerm;
                firstTerm = secondTerm;
                secondTerm = nextTerm;
              }
            }
          }
        `,
        output:
        `
        Fibonacci Series till 10 terms:
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
        `

    },
      {
        name:"Java Program to Find LCM of two Numbers",
        program:
        `
        public class Main {
            public static void main(String[] args) {
          
              int n1 = 72, n2 = 120, lcm;
          
              // maximum number between n1 and n2 is stored in lcm
              lcm = (n1 > n2) ? n1 : n2;
          
              // Always true
              while(true) {
                if( lcm % n1 == 0 && lcm % n2 == 0 ) {
                  System.out.printf("The LCM of %d and %d is %d.", n1, n2, lcm);
                  break;
                }
                ++lcm;
              }
            }
          }
        `,
        output:
        `
        The LCM of 72 and 120 is 360.
        `

    },
    {
        name:"Java Program to Check Palindrome",
        program:
        `
        class Main {
            public static void main(String[] args) {
          
              String str = "Radar", reverseStr = "";
              
              int strLength = str.length();
          
              for (int i = (strLength - 1); i >=0; --i) {
                reverseStr = reverseStr + str.charAt(i);
              }
          
              if (str.toLowerCase().equals(reverseStr.toLowerCase())) {
                System.out.println(str + " is a Palindrome String.");
              }
              else {
                System.out.println(str + " is not a Palindrome String.");
              }
            }
          }
        `,
        output:
        `
        Radar is a Palindrome String.
        `

    },
    {
        name:"Java Program to Check Armstrong Number",
        program:
        `
        public class Armstrong {

            public static void main(String[] args) {
        
                int number = 371, originalNumber, remainder, result = 0;
        
                originalNumber = number;
        
                while (originalNumber != 0)
                {
                    remainder = originalNumber % 10;
                    result += Math.pow(remainder, 3);
                    originalNumber /= 10;
                }
        
                if(result == number)
                    System.out.println(number + " is an Armstrong number.");
                else
                    System.out.println(number + " is not an Armstrong number.");
            }
        }
        `,
        output:
        `
        371 is an Armstrong number.
        `

    },
    {
        name:"Java Program to Make a Simple Calculator Using switch...case",
        program:
        `
        import java.util.Scanner;

        class Main {
          public static void main(String[] args) {
        
            char operator;
            Double number1, number2, result;
        
            // create an object of Scanner class
            Scanner input = new Scanner(System.in);
        
            // ask users to enter operator
            System.out.println("Choose an operator: +, -, *, or /");
            operator = input.next().charAt(0);
        
            // ask users to enter numbers
            System.out.println("Enter first number");
            number1 = input.nextDouble();
        
            System.out.println("Enter second number");
            number2 = input.nextDouble();
        
            switch (operator) {
        
              // performs addition between numbers
              case '+':
                result = number1 + number2;
                System.out.println(number1 + " + " + number2 + " = " + result);
                break;
        
              // performs subtraction between numbers
              case '-':
                result = number1 - number2;
                System.out.println(number1 + " - " + number2 + " = " + result);
                break;
        
              // performs multiplication between numbers
              case '*':
                result = number1 * number2;
                System.out.println(number1 + " * " + number2 + " = " + result);
                break;
        
              // performs division between numbers
              case '/':
                result = number1 / number2;
                System.out.println(number1 + " / " + number2 + " = " + result);
                break;
        
              default:
                System.out.println("Invalid operator!");
                break;
            }
        
            input.close();
          }
        }
        `,
        output:
        `
        Choose an operator: +, -, *, or /
        +
        Enter first number
        8
        Enter second number
        6
        8 + 6 = 14.
        `

    },
]

export default JavaProgram