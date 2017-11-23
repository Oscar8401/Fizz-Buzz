<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/StyleSheet.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
        <div class="page-header"><h1>Assigment 8: Web-Front-end and JavaScript</h1></div>
        <div class="row">
            <h3>FizzBuzz:</h3>
            <p>
                "Write a program that prints the numbers from 1 to 100. 
                But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
                For numbers which are multiples of both three and five print “FizzBuzz”.".
                The program should ask the user to input 3 numbers: the first will be Fizz, the secound will be Buzz and
                the third will be count (the distanse numbers between the two numbers fizz and buzz).
            </p>
            <h5>More details:</h5>
            <p>The program should consist of two parts:</p>
            <ol>
               <li>Part one:
                <br /><p>
                    You should write a program in javaScript which return numbers fron 1 to 100 using flags<br /> 
                  (Fizz, Buzz or FizzBuzz) acording to the number if %3 or %5.<br />The program should shou the result on the console.
                   </p>
                </li>
                <li>Part two:
                <br /><p>
                        The program should ask the user to input 3 numbers as Fizz, Buzz and count and shows the result<br />
                        on the same html page.
                    </p>
                </li>
                <li>Notice:
                <br /><p>
                    You should creat a javaScript file and write your code inside it.<br />
                    You should creat a CSS file and apply some styleSheep.
                    <br />Feel free to use Bootstrap for responsive design.
                    </p>
                </li>
            </ol>
        </div>
        <hr />
    <div class="row">
        <h4>Please take your time and insert the numbers:</h4><br />
        <form id="userInput">
            Fizz:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" name="Fizz" placeholder="FizzNumber"/><br /><br />
            Buzz:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" name="Buzz" placeholder="BussNumber"/><br /><br />
            Count to:<input type="number" name="countTo" placeholder="Count to"/><br /><br />
        </form>
        <button onclick="FizzBuzzFunction()" class="btn btn-primary">Start</button>
    </div><br />
        <div id="output">&nbsp;</div>
    </div>
</body>
</html>
