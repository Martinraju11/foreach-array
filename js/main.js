const numbers = [1, 2, 3, 4, 5];
var fact = 1;
numbers.forEach(function (number) {
    fact = fact * number;
    document.write("factorial of " + number + " is" + " " + fact, "<br>");

}
)