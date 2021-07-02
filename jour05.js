 /// Calculator /////
 if (process.argv.length == 5) {
    var firstNum = parseInt(process.argv[2]);
    var secondNum = parseInt(process.argv[4]);

    calculate(firstNum, secondNum, process.argv[3])
} else {
    console.log("Error")
}

function calculate(num1, num2, operator) {

    switch (operator) {
        case "+":
            console.log(`${num1} + ${num2} =`, num1 + num2)
            break;
        case "x":
            console.log(`${num1} x ${num2} =`, num1 * num2)
            break;
        case "-":
            console.log(`${num1} - ${num2} =`, num1 - num2)
            break;
        case "/":
            console.log(`${num1} / ${num2} =`, num1 / num2)
            break;
        default:
            console.log("Is not an allowed operator")
            break;
    }

}

 //// Table ////

 if (process.argv.length === 3) {

    multiply(parseInt(process.argv[2]))
} else {
    console.log("Error")
}

function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} =`, num * i)
    }
}

///Separate Table /////
function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} =`, num * i)
    }
}

function addition(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} + ${i} =`, num + i)
    }
}

module.exports = {
    multiply,
    addition
}
var tableUtils = require("./table-utils")

var multiplyFunc = tableUtils.multiply;
var addtionFunc = tableUtils.addition;

if (process.argv.length === 3) {
    var num = parseInt(process.argv[2]);

    addtionFunc(num)
} else {
    console.log("Error")
}
////Guess/////
var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * 100 + 1);

function play() {
    prompt.get(
        {
            name: "numUser",
            description: "Quel est le nombre mystère ?",
        },
        function (err, res) {
            if (res.numUser.search(/^[1-9][0-9]?$|^100$/g) === -1) {
                err = "The value is not a number between 1 and 100";
            }

            if (err) {
                console.log("Error in the input: ", err);
                return play();
            }

            if (res.numUser < mysteryNum) {
                console.log("C'est plus !")
                play();
            } else if (res.numUser > mysteryNum) {
                console.log("C'est moins !")
                play();
            } else {
                console.log("Bravo!!!!")
            }

        }
    )

}

prompt.start();

play();
/// Bouns///
var prompt = require("prompt");
var randomWords = require("random-words");
var colors = require("colors");

var wordLength = 3;
var mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];

while (mysteryWord.length !== wordLength) {
	mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
}

console.log("mysteryWord :", mysteryWord);

var schema = {
	properties: {
		word: {
			description: "Quel est le mot mystère ?",
			pattern: new RegExp(`^[a-z]{${wordLength}}$`),
			required: true,
			message: `Entrez un mot de ${wordLength} lettres dont la première lettre est ${mysteryWord[0]}`,
		},
	},
};

function guess() {
	prompt.get(schema, (err, result) => {
		if (result.word === mysteryWord) {
			console.log("Oh yeah !!!!");
		} else if (result.word.length < mysteryWord.length) {
			console.log("more letters");
			guess();
		} else if (result.word.length > mysteryWord.length) {
			console.log("less letters");
			guess();
		} else {
			var answer = result.word.split("");
			var mysteryWordArray = mysteryWord.split("");
			for (var i = 0; i < wordLength; i++) {
				for (var j = 0; j < wordLength; j++) {
					if (answer[i] === mysteryWordArray[j] && i === j) {
						answer[i] = answer[i].red;
					} else if (answer[i] === mysteryWordArray[j] && i !== j) {
						answer[i] = answer[i].yellow;
					}
				}
			}

			console.log(answer.join(""));
			guess();
		}
	});
}

prompt.start();
guess();