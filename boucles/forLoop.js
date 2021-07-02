/// some des carrès //

let sum = 0;

for(let i = 5; i <= 10; i++) {
  sum =sum += i * i;
}
 console.log(sum);


////complons ////

let count = 0;
let total = 1000;
for (var i = 100; i <= total.length; i++) {
 if (i % 7 === 0) {   count++;
   }
}
 console.log(total);

/////Chanceux//////
var sum = 0;
var min = 1;
var max = 6;
//for (var i = 0; i < 20; i++) {
for (var i = 1; i <= 20; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    if (dice >= 5) {
        sum += dice;
    }
}

console.log(sum);
///Des boites ///
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);
// i < 14 ? oui
// j'affiche 10
// i < 14 ? oui
// j'affiche 34
// i < 14 ? Non => fin de la boucle
// j'affiche 17
// j'affiche 30
// j'affiche 14
///Des setiob///
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);
// i !== 0 ? oui
// j'affiche 12
// i ! == 0 ? oui
// j'affiche 24
// i ! == 0 ? oui
// j'affiche 33
// i !== 0 ? oui
// j'affiche 39
// i ! == 0 ? non
// j'affiche 42
// j'affiche 0
/// Encore Des boites ///
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
// Box 1 = 0
// Box 2 = 3

// i = 0
// i > -4 ? oui
// i % 2 === 0 ? oui
// j'affiche box1 + i => 0
// box2++ => box 2 = 4
// i-- => i = -1
// i > -4 ? oui
// i % 2 === 0 ? non
// j'affiche box2 + i => 3
// box1-- => box 1 = -1
// i-- => i = -2
// i > -4 ? oui
// i % 2 === 0 ? oui
// j'affiche box1 + i => -3
// box2++ => box 2 = 5
// i-- => i = -3
// i > -4 ? oui
// i % 2 === 0 ? non
// j'affiche box2 + i => 2
// box1-- => box 1 = -2
// i-- => i = -4
// i > 4 ? non
// j'affiche box1: -2
// j'affihce box2:: 5
// j'affiche i: -4


    


 