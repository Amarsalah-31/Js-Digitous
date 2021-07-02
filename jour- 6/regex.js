////Replace ////var str = "An apple was eaten !";
var regex = /(a|e)/gi;
console.log(str.replace(regex, "4"));

var str2 = "My phone number is 553-634524435";
console.log(str2.replace(/[0-9]/gi, "X"));

/// Match ///
var str3 = "Hey 4get these words 3_please";
var wor = str3.match(/\b[a-z]+/gi);
console.log(wor);
///Search ///
var str = "ABxxAxxB";
var pos = str.search(/A..B/gi);
console.log(pos);