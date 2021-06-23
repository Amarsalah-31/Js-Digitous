     function calculate() {
  
   
    let number1 = 5;
    let number2 = 4;
    let operator = '*';

    if (operator == '+') {  
    result = number1 + number2; 
    console.log(result); 
    }  else if (operator == '-') {  
    result = number1 - number2;  
    }  else if (operator == '*') { 
    result = number1 * number2;  
    }  else {  
    result = number1 % number2;  
    }  
} 
console.log(calculate());
console.log("Result is " + result); 

/// Table /////
var result = '\n';
    for ( var i= 1;i<11; i++){
        for( var j =1; j < 11; j++){
            result += (i*j) + ' ';
        }
        result+= '\n'
}
console.log(result);