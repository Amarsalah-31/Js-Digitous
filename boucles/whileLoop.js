////  exe 1 /////
let i = 50;

while (i <= 200) {
     if (i % 2 === 0) {
        console.log(i);
    }
    i++;

 console.log(i);
    i += 2;
}

////exe 2 ////
let dice = null;
let count = 0;

while(dice < 6) {
    return Math.floor(Math.random() * (dice - count + dice)) + 1;
}
// console.log(dice);


////exe 3 /////
let ussainBolt = 0;
let tysonGay = 0;
let x = 0;
while(ussainBolt <100 || tysonGay < 100) {
    ussainBolt += Math.floor(Math.random() *10) + 1;
    tysonGay += Math.floor(Math.random() *10) + 1;
}

if(ussainBolt > tysonGay) {
    console.log("The winer is ussainBolt");
} else if(ussainBolt < tysonGay) {
    console.log("The winer is tysonGay");
} else {
    console.log("They are equal");
}
   