var nums = [];
var randomNum = 0;

for (var i = 0; i <50; i++) {
    randomNum = Math.floor(Math.random() * (100 + 1) +1);

    nums.push(randomNum)
    console.log(randomNum);
}

var total = 0;

console.log("i:", i);
for (var i = 0; i <= nums.length - 1; i++) {
    total = total += nums[i];
}

console.log('Total:', total);
///Max ///
var numbers = [];
var randomNumber = 0;

for (var i = 0; i <= 50; i++) {

    randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

    numbers.push(randomNumber);
}

// console.table(numbers);

var maxNumbers = 0;

for (var j = 0; j <= numbers.length - 1; j++) {

    if (maxNumbers < numbers[j]) {
        maxNumbers = numbers[j];
    }

}

console.log("Final result", maxNumbers);
///unique///
var numbers = [];
var randomNumber;

for (var i = 0; i <= 50; i++) {
	randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);
	numbers.push(randomNumber);
}

var j = 0;
while (!(numbers[j] >= 75 && numbers[j] <= 100) && j < numbers.length) {
	j++;
}

// it's possible that there is no number in the array that respects the conditions
if (numbers[j] !== undefined) {
	console.log("final result", numbers[j]);
} else {
	console.log("no result");
}
///Nested Loop///
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var tempArray = [];
var countO = 0;

for (var i = 0; i <= words.length - 1; i++) {
    // console.log(words[i].split(""))

    tempArray = words[i].split(" ").join("").split(""); // pour effacer les espaces, pas obligatoire

    console.log(tempArray);

    for (var j = 0; j <= tempArray.length - 1; j++) {
        // console.log("2eme boucle", tempArray[j]);

        if (tempArray[j] == "o") {
            // countO++;
            countO = countO + 1;
        }
    }
}

console.log("final result", countO);