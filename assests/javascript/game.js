var userguess = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var words = [
    "cristiano ronaldo",
    "lionel messi",
    "zlatan ibrahimovic",
    "keisuke honda",
    "carles puyol",
    "andres iniesta",
    "clint dempsey",
    "manuel neuer",
    "franck ribery",
    "robert lewandowski",
    "arjen robben",
    "neven subotic",
    "giorgio chillini",
    "vincent kompany",
    "eden hazard"];

var word = words[Math.floor(Math.random() * words.length)];
var splitWord = word.split("");

console.log(word)
console.log(splitWord)

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

console.log(answerArray)


var myHtml = "<p>Guess the name of the footballer (soocer player)!!</p>";
var blankSpaces = "<p>Who is this: " + answerArray + "</p>";
var win = "<p>Wins: " + wins + "</p>";
var loss = "<p>Losses: " + losses + "</p>";

console.log(myHtml)

document.querySelector("#answerArrays").innerHTML = blankSpaces;
document.querySelector("#winCount").innerHTML = win;
document.querySelector("#lossCount").innerHTML = loss;

//First problem is making the 'press any key to start element'
// document.onkeydown = function() {
//     var start = "any key"
// }

//Different approach to setting up press any key to play (boolean)
// var isGameOver = false;
// if (isGameOver === false) {

//After pressing any button, it should allow you to start guessing
// if (remainingLetters > 0) {
//     //var x = document.getElementById("remaining");
//     document.getElementById("remaining").innerHTML = answerArray.join(" ");

//     document.onkeyup = function() {
//         var userguess = String.fromCharCode(event.keyCode).
//             toLowerCase();

//             console.log(userguess);


//             // var remainingLetters = word.length;
//             // // for (var r = 7; r === 0; r--); {
//             // //     if r === 0, endGame
//             // // }

//             // while (remainingLetters > 0) {
//             //     document.write(answerArray.join(" "));

//             //         for (var j = 0; j < word.length; j++) {
//             //             if (word[j] === userguess) {
//             //                 answerArray[j] = userguess;
//             //                 remainingLetters--;
//             //             }
//             //         }
//             // }

//     }
// }

// // else {
// //     onkeydown[];
// // }