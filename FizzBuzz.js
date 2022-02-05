
//Algorithm
//step1: Start 
//step2: Take input as n
//step3: Iterate the loop from 1 to n
//step4: In if statement check number is divisible by 3 and 5 then print FizzBuzz 
//step5: In else if statement check number is divisible by 3 then print Fizz 
//step6: In else if statement check number is divisible by 5 then print Buzz
//step7: If all the above conditions are false then goes to else case and print number as it is.
//step8: Stop

function myFunction(n)
{
    for(var i=1;i<=n;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log("FizzBuzz");
        }
        else if(i%3==0)
        {
            console.log("Fizz");
        }
        else if(i%5==0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
myFunction(n);