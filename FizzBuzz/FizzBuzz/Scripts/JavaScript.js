for (var i = 1; i < 100; i++) { //runs through 1 to 100
    if (i % 3 === 0 && i % 5 === 0) { //controlls if i is a multiple of 3 and 5
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) { //controlls if i a multiple of 3
        console.log("Fizz");
    }
    else if (i % 5 === 0) { //controlls if i is a multiple of 5
        console.log("Buzz");
    }
    else {
        console.log(i); //prints the current increment of 1 to 100
    }

}//end for loop 1 to 100
function FizzBuzzFunction() {
    var x = document.getElementById('userInput');
    var Fizz = x.elements[0].value;
    var Buzz = x.elements[1].value;
    var count = x.elements[2].value;
    var StringOutput = "Output";
    if (count <= 1000) {
        for (var i = 1; i < count; i++) {
            StringOutput += "&nbsp";
            if ((i % Fizz) === 0 && (i % Buzz) === 0) {
                StringOutput += "FizzBuzz";
            }
            else if ((i % Fizz) === 0) {
                StringOutput += "Fizz";
            }
            else if ((i % Buzz) === 0) {
                StringOutput += "Buzz"
            }
            else {
                StringOutput += i;
            }
            document.getElementById("output").innerHTML = StringOutput;
        }

    }
    else {
        document.getElementById("output").innerHTML = 'Output:<br /> Please keep the count less then 1000.';

    }
}
 
 



  
