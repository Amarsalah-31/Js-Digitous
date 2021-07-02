////  Comptons /////
var i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}

var i = 50;
while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

////Try again ////
var dice = null;
var count = 0;
var min = 1;
var max = 6;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    count++;
}

console.log(count);

////Course /////
var ussainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

while (ussainBolt < 100 && tysonGay < 100) {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;

    console.log("Ussain Bolt", ussainBolt);
    console.log("Tyson Gay", tysonGay);
}

/*do {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;
} while (ussainBolt < 100 || tysonGay < 100);*/

if (ussainBolt > tysonGay) {
    console.log("Le vainqueur est Ussain Bolt");
} else if (tysonGay > ussainBolt) {
    console.log("Le vainqueur est Tyson Gay");
} else {
    console.log("Egalité !");
}
///Des boites///
var box1 = 12;
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}
// box1 = 12
// box2 = 5
// box1 > 0 ? oui
// j'affiche box2: 5
// box1 -= 10 => box1 = 2
// j'affiche box1: 2
// box1 > 0 ? oui
// j'affiche box2: 5
// box1 -= 10 => box1 = -8
// j'affiche box1: -8
// box1 > 0 ? non
/// Encore des boites ///
var i = 0;
var box1 = 7;
while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1)
// i = 0
// box1 = 7
// i > 0 ? non
// j'affiche i: 0
// j'affiche box1: 7
   