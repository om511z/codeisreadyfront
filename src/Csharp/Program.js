const Csharpprogram = [
    {

        program:
            `
        class Program
        {
            static void Main(string[] args)
            {
                Console.WriteLine("Hello World!");
                Console.ReadKey();
            }
        }
        `,
        name: "C# Program to Print Hello World",
        output:
            `Hello World!`,

    },
    {

        program:
            `
        class Program
        {
            static void Main(string[] args)
            {
                int number;
                Console.Write("Enter a number:");
                number = Convert.ToInt32(Console.ReadLine());
     
                Console.WriteLine("You entered :{0}",number);
                Console.ReadLine();
            }
        }
        `,
        name: "C# Program to Print an Integer Entered by User",
        output:
            `
            Enter a number:22
            You entered : 22
            `,

    },
    ,
    {

        program:
            `
        
class Program
{
    static void Main(string[] args)
    {
        int num1, num2, sum;
        Console.WriteLine("Calculate the sum of two numbers:");
        Console.Write("Input number1:");
        num1 = Convert.ToInt32(Console.ReadLine());
        Console.Write("Input number2:");
        num2 = Convert.ToInt32(Console.ReadLine());
        sum = num1 + num2;
        Console.Write("Result:"+sum);

        Console.ReadKey();
    }
}
        `,
        name: " C# Program to Add Two Integers",
        output:
            `
            Calculate the sum of two numbers:
            Input number1:2
            Input number2:5
            Result:7
        `,

    },
    ,
    {

        program:
            `
        class Program
        {
            static void Main(string[] args)
            {
                int P, T;
                float R, SI;
                Console.Write("Enter Amount :");
                P = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter Rate :");
                R = Convert.ToSingle(Console.ReadLine());
                Console.Write("Enter Time :");
                T = Convert.ToInt32(Console.ReadLine());
                SI = P * R * T / 100;
                Console.WriteLine("Interest is :{0}", SI);
                Console.ReadKey();
     
                Console.ReadLine();
            }
        }
        `,
        name: "Program To Calculate the Simple Interest in C#",
        output:
            `
            Enter Amount :10
            Enter Rate :7
            Enter Time :14
            Interest is:9.8
        `,

    },
    ,
    {

        program:
            `
        
class Program
{
    static void Main(string[] args)
    {
        int area, length, width;
        Console.Write("Please write the length of your rectangle: ");
        length = Convert.ToInt32(Console.ReadLine());
        Console.Write("Please write the width of your rectangle: ");
        width = Convert.ToInt32(Console.ReadLine());
        area = length * width;
        Console.WriteLine("The area of rectangle : {0}", area);
        Console.ReadKey();
    }
}
        `,
        name: "C# Calculate Rectangle Area",
        output:
            `
            Please write the length of your rectangle:5
            Please write the width of your rectangle:6
            The area of rectangle :30
        `,

    },
    {

        program:
            `
            class Program
            {
                static void Main(string[] args)
                {
                    int number1,number2,number3,avarage;
         
                    Console.Write("Enter 1st number :");
                    number1 = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Enter 2nd number :");
                    number2 = Convert.ToInt32(Console.ReadLine());
                    Console.Write("Enter 3rd number :");
                    number3 = Convert.ToInt32(Console.ReadLine());
         
                    avarage = (number1 + number2 + number3) / 3;
         
                    Console.Write("Avarage of three numbers is {0}",avarage);
         
                    Console.ReadKey();
                }
            }
        `,
        name: "Program to finds the average of 3 numbers in C#",
        output:
            `
           Enter 1st number :5
           Enter 2nd number :15
           Enter 3rd number :25
           Average of three numbers is 15
        `,

    },
    {

        program:
            `
        
 
            using System;
            using System.Collections.Generic;
            using System.Linq;
            using System.Text;
            using System.Threading.Tasks;
             
            namespace test
            {
                class Program
                {
                    static long[] numbers;
             
                    static long Fib(int n)
                    {
                        if (0 == numbers[n])
                        {
                            numbers[n] = Fib(n - 1) + Fib(n - 2);
                        }
                        return numbers[n];
                    }
             
             
                    static void Main()
                    {
                        Console.Write("n = ");
                        int n = int.Parse(Console.ReadLine());
                        numbers = new long[n + 2];
                        numbers[1] = 1;
                        numbers[2] = 1;
                        long result = Fib(n);
                        Console.WriteLine("fib({0}) = {1}", n, result);
                        Console.ReadKey();
                    }
                }
            }
        `,
        name: "Fibonacci Series in C# with Method",
        output:
            `
          n = 6
          fib(4) = 8
        `,

    },
]

export default Csharpprogram