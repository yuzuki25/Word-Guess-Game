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

console.log(answerArray);

//(answerArray.join(" ")) = answer;

var blankSpaces = "<p>Who is this: " + answerArray + "</p>";
var win = "<p>Wins: " + wins + "</p>";
var loss = "<p>Losses: " + losses + "</p>";



document.querySelector("#answerArrays").innerHTML = blankSpaces;
document.querySelector("#winCount").innerHTML = win;
document.querySelector("#lossCount").innerHTML = loss;

var myGuess;
document.onkeydown = function(event) {
    myGuess = event.key;
    myGuess = onkeydown(userguess);
}

for (var j = 0; j < word.length; j++) {
    if (word[j] === myGuess) {
        answerArray[j] = myGuess;
        remainingLetters--;
    }
}

var wrong = 8;
document.querySelector("#guessRemaining").innerHTML = wrong;
//Game loop from here.
while (remainingLetters > 0) {
    if (myGuess === answerArray[j]) {
        answerArray.join("#answerArrays") = myGuess;

    }

    if (myGuess != answerArray[j]) {
        wrong--;
        document.querySelector("#guessed").innerHTML = myGuess;
    }

    else (wrong === 0) 
        losses++;
    

}

if (reaminingLetters === 0) {
    win++;
}

























// while (remainingLetters > 0) {
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

