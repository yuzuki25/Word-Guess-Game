var userguess = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;

//First problem is making the 'press any key to start element'
document.onkeydown = function() {
    var start = "any key"
}

//After pressing any button, it should allow you to start guessing
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toUpperCase();

        console.log(userguess);

}