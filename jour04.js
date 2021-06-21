
///exe 1 *** Object***

var cat = {
        name: "Garfield",
        age: 3,
       isCute: true,
    };
    console.log(cat);
    console.log(cat.name);
    console.log(cat["age"]);
    if (cat.isCute === true) {
        console.log("So cute !");
    }

///exe 2 *** Combine ***
var cat2 = {
       name: "Simba",
         age: 5,
         isCute: false,
     };
    
     var cats = {
         cat: {
           name: "Garfield",
            age: 3,
           isCute: true,
        },
    
         cat2: {
             name: "Simba",
          age: 5,
            isCute: false,
         }
     };
    
    console.log(cats.age);
    console.log(cats.isCute);
console.log(cats["cat2".isCute]);
///exe 3 ***Even***

 function checkIfEven(num) {
     if(num % 2===0) {
        console.log("Even");
     } else {
         console.log("Odd");
     }
 }

 
 console.log(checkIfEven(9));
 console.log(checkIfEven(4));

//// exe 4 ***Compare**

function compare(num1, num2) {
    if(num1 > num2) {
        console.log("num1 is bigger");
    } else if(num2 > num1) {
        console.log("num2 is bigger");
    } else {
        console.log("both are the same");
    }
}
compare(6,4);
compare(7,6);
compare(7,4);


///exe 5 ****Add Up****
var total= 0;
function addUp  (num){
    for (var i= 0; i<= num; i++){
         total = total+1;
        }
        return total;
    }
    var x = addUp(12);
    console.log(x);
    console.log('le total est ${x}');

 /// exe 6 ****Bonus*****

function generatepassword (num){
    if (num => 6 || num <= 15){
return "error";
    }
    let letters = ["A","B","C","D","E","F","G","H","I","J","k","L",""];
    let password ="";
    for (let i = 1 ;i <= num; i++){
        let index = Math.floor(Math.random()* letters.length -1 );
        console.log(index);
        password += letters[index];
    }
return password;
}
console.log("");
console.log(generatepassword(10));
console.log(generatepassword(17));
///exe**** time *******
function format(num) {
     return Math.floor(num / 60) + ':' + Math.floor(num % 60) + ':' + (num - 2) ;
    var minutes = 0;
    var seconds = 0;
    return minutes = ":" + Math.floor(num / 60) + ":" + seconds + ":" + (num - minutes * 60) + ":" + minutes.substr(-2) + ":" + AudioScheduledSourceNode.substr(-2) + seconds;
}

console.log(format());



///exe 7 *****Bonus ll*****