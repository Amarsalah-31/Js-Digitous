
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

//////  Bonus//////
var limit = 100;

for (var i = 0; i <= limit; i++) {

    if (i % 7 !== 0) {
        // if (i % 15 === 0) {
        //     console.log("fizzbuzz", i);
        // }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz", i);
        }
        else if (i % 5 === 0) {
            console.log("buzz", i);
        } else if (i % 3 === 0) {
            console.log("fizz", i);
        } else {
            console.log("value of i", i);
        }

    }

    // console.log("fin d'une iteration");
}
    //// Bonus ll///
    var total = 0;
var limit = 10;

var i = 0;

while (i <= limit) {
    total += i;

    i++;
}

console.log(total);
    

    /// bouns lll///
    var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6

    // console.log(students[0]);
    // console.log(students[1]);
    // console.log(students[2]);
    // console.log(students[3]);
    // console.log(students[4]);
    // console.log(students[5]);
    
    var min = 0;
    var max = students.length - 1;
    
    var random = Math.random(); // 0 inclus et 1 exclu
    
    var indexRandom = Math.floor(random * (max + 1));
    
    console.log(students[indexRandom])
    
    // var students = ["Amir", "Asma", "Sabrina", "Fasulu", "Ikram", "Karim"]; // 6
    
    // var min = 0;
    // var max = students.length - 1;
    
    // var i = 1;
    
    // while (students[i] !== "Amir") {
    //     i = Math.floor(Math.random() * (max + 1));
    
    //     console.log(students[i]);
    // }
    
    // Bonus IV
    var array = [];
    var min = 0;
    var max = 100;
    var numRandom = 0;
    
    for (var i = 1; i <= 20; i++) {
        numRandom = Math.floor(Math.random() * (max - min + 1));
    
        // console.log(numRandom);
    
        if (array.indexOf(numRandom) === -1) {
            array.push(numRandom);
        } else {
            i--;
        }
    }
    
    console.table(array);
    
    var numMax = array[0]; 
    
    for (var i = 1; i < array.length; i++) {
        var item = array[i];
    
        if (item > numMax) {
            numMax = item;
        }
    }
    
    console.log(numMax);