/// Alphabet ///
function sortLetters(word) {
    console.log(word);
    var letters = word.split("");
    console.log(letters.sort().join(""));
}

function sortLetters2(word) {
    var letters = [];
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    console.log(letters.sort().join(""));
}

sortLetters("konnexio");

/// XOXO///
function countEach(word) {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < word.length; i++) {
        switch (word.charAt(i)) {
            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }
        }
    }

    return countO === countX;
}

console.log(countEach("xoxoxo"))
 /// palindrome///
 function checkPal(word) {
    var letters = word.split("");
    var reversedLetters = letters.reverse();
    var reversedWord = reversedLetters.join("");

    if (reversedWord === word) {
        console.log("Palindrome !");
    } else {
        console.log("Nope !");
    }
}

checkPal("racecar");
checkPal("laptop")
///Swap///
function swap(sentence) {
    var swappedSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence.charAt(i);
        if (letter === letter.toUpperCase()) {
            swappedSentence += letter.toLowerCase();
        } else {
            swappedSentence += letter.toUpperCase();
        }
    }

    return swappedSentence;
}

console.log(swap("Hello World"));
///Bonus////
function makeItSpongeBob(sentence) {
    var spongeBobSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence.charAt(i);
        if (i % 2 === 0) {
            spongeBobSentence += letter.toUpperCase();
        } else {
            spongeBobSentence += letter.toLowerCase();
        }
    }

    return spongeBobSentence;
}

console.log(makeItSpongeBob("Javascript is easy"));

  ///Bonus ll///
  function compare(letter1, letter2) {
    if (letter1.toLowerCase() > letter2.toLowerCase()) {
        return 1;
    } else if (letter1.toLowerCase() < letter2.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

function sortLetters(word) {
    return word.split("").sort(compare).join("");
}

console.log(sortLetters("Konnexio"));
///Bonuslll///
function countEach(word) {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < word.length; i++) {
        switch (word.charAt(i).toLowerCase()) {
            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }

            default: {
                return "Error, you have other letters than x and o !";
            }
        }
    }

    return countO === countX;
}

console.log(countEach("xoXoxo"))
console.log(countEach("abc"))
///BounslV ///

  