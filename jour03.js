
///exe 1** Array***

 var fruits= ["mango","lemon","llueberry"]
 console.log(fruits);
console.table(fruits);
///exe 2***
let  ingredients = [];
 ingredients.push =["eggs","milk","butter"]
console.log(ingredients[0]);
console.log(ingredients.indexOf("butter"));

///exe 3** Add & Remove***

let objects =["pen","book","lamp",]
//Add clair
objects.unshift("clair")
console.log(objects);
//add labtop
objects.push("laptop");
console.log(objects);
// Remove lamp
objects.pop();
console.log(objects);
// Remove clair
objects.shift();
console.log(objects);

///exe 4***Order****

let numbers =[4,10,8,12,6]
numbers.reverse();
console.log(numbers);
///Ascending 
numbers.sort((a,b) => a-b);
console.log(numbers);

///exe 5 **** Boucle****

var total = 0, limit=10;
for (var i = 1;i <= limit; i++ ){
   total=total+i;
}
console.log(total);
  

 /// exe 6 ***Reverse***

 var sentence = "Hello Konexio";
  for (var i = sentence.length - 1; i >= 0; i--) {
      console.log(sentence[i]);
  }
 
  var reversed = "";
 for (var i of sentence) {
     reversed = i + reversed;
 }
 console.log(reversed);

////// exe 7 *** Bonus***


for (var i= 0; i <= 100; i++){
    if(i % 3 === 0){
        console.log("fizz");
    }else if (i % 5 ===0){
        console.log("buzz");
    }else if ( i % 3===0 && i% 5 ===0){
        console.log("fizzbuzz");
    }else if ( i % 7===0 ){
        console.log();
    }else{
        console.log(i);
    }
}
    ////exe 8 *** Bonus ll***
    var total = 0;
    var limit = 10;
    while (total<= limit ){
        total ++;
        limit += total;
        console.log(i);
    }

    /// exe 9 *** bouns lll***
var promo5 = ["Kévin", "Laura", "Emran", "Elodie", "Anthony", "Eliott", "Andy", "Amar", "Art", "Baydir", "Julien", "Victor", "Yangchen", "Asaad"];
var nom = promo5[Math.floor(Math.random() * promo5.length)];
console.table(nom);