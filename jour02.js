//exe 1 * number**

var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);

//exe 2 * convert**
var basic = 34;
var stringified = basic.toString();
console.log (stringified);

//exe 3 * round**
var num = 1.5;
var rounded =Math.round(num);
console.log(rounded);

//exe 4 *arithmetique**

let Test = 12, Bis = 5;
console.log(  Test + Bis );
console.log(Test - Bis);
console .log (Test ** Bis);
console.log(Test % Bis);
console.log  (Test / Bis);


//exe 5 *comparaison**

var test = 143, bis = 219;
console.log("> :", test > bis);
console.log("< :", test < bis);
console.log(">= :", test >= bis);
console.log(" <= :",test <= bis);
console.log("=== :", test === bis);
console.log("!= :", test != bis);
console.log("!== :", test !==bis);

//exe 6 * condition**

let limit = 50, score = 64; 
if (score >= limit){
  console.log("ok good !");
} else{
    console.log("oh nooo ...")
}


// exe 7* condition ll**

let password ="azerty";
if(password.length > 5 ) {
console.log("The password is secure");
}
//exe 8 * condition lll**

if (score >= limit && password > 5) {
      console.log("Everything is good");
 } else if (score >= limit || password > 5) {
     console.log("Something is good");
  } else {
       console.log("Nothing is good");
   }
  

//exe 9 *** Bouns***
var  random = Math.floor(Math.random() * 6) + 1;
var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
if (random === 6) {
    console.log(random, "Yes I win");
} else {
    console.log(random, "So close...");
}

///exe 10 ***Bouns ll ***

var month = "April";

switch (month) {
    case "January": 
		console.log("Winter");
		break;
	case "April": 
		console.log("Spring");
		break;
	case "July": 
		console.log("Summer");
		break;
	default: 
		console.log("Fall...");
     }
///exe 11***Bouns lll***
var roundedNumber = 12.3;
if (roundedNumber % 1 >= 0.5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}

var str = roundedNumber.toString()

var decimal = str.substring(str.indexOf("."));
console.log(decimal);

if (decimal >= 5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}




