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

// var splitWord = word.split("");

// console.log(word)
// console.log(splitWord)

//First problem is making the 'press any key to start element'
document.onkeydown = function() {
    var start = "any key"
}


//After pressing any button, it should allow you to start guessing
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

        console.log(userguess);

        var word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];
        for (var i = 0; i < word.length; i++); {
            answerArray[i] = "_";
        }

        var remainingLetters = word.length;
        // for (var r = 7; r === 0; r--); {
        //     if r === 0, endGame
        // }

        while (remainingLetters > 0) {
            document.write(answerArray.join(" "));

                for (var j = 0; j < word.length; j++) {
                    if (word[j] === userguess) {
                        answerArray[j] = userguess;
                        remainingLetters--;
                    }
                }
        }

}