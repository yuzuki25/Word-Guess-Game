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


//press any button to start
// if (onkeydown[]) {
//     start the game/run code?
// }


//This was made in theory to understand what key was pressed by the user out of the userguess variable
var myGuess;
document.onkeydown = function(event) {
    myGuess = event.key;
    myGuess = onkeydown(userguess);
}


//This was in theory supposed to work to fill in the underscores with the user's guesses
for (var j = 0; j < word.length; j++) {
    if (word[j] === myGuess) {
        answerArray[j] = myGuess;
        remainingLetters--;
    }
}


//This is made to display the number of wrong guesses the player has remaining
var wrong = 8;
document.querySelector("#guessRemaining").innerHTML = wrong;



//Game loop from here. In the game loop, I was planning on making it so that the user can keep guessing until they get the answer or run out of wrong guesses allowed
while (remainingLetters > 0) {
    if (myGuess === answerArray[j]) {
        answerArray.join("#answerArrays") = myGuess;
        //This is to make the letter that was guessed show up if it was a right guess
    }

    if (myGuess != answerArray[j]) {
        wrong--;
        document.querySelector("#guessed").innerHTML = myGuess;
        //This is to make the letter that was guessed show up in the wrong guesses and count down the number of remaining guesses
    }

    else (wrong === 0) 
        losses++;
        //When you run out of guesses to make, this should update the count of losses

}

if (remainingLetters === 0) {
    win++;
}
//This should update the win count when the word is fully guessed


//I wasn't sure how to reset the game but maybe it would have turned out like this
// if (remainingLetters === 0 {
//     reset game or loop back to beginning with the random word calculation maybe?
// })





















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

