function formatDate(dateString) {

  var date = new Date(dateString);

  console.log("hi".padStart(5, "*"));

  var jj = date.getDate().toString().padStart(2, "0");
  var mm = (date.getMonth() + 1).toString().padStart(2, "0");

  console.log("Result:", `${jj}/${mm}/${date.getFullYear()}`)

}

formatDate("1990-12-31");
/// MY DATE //
const myDate = new Date();
console.log(myDate);

// Number of miliseconds since epock (1970)
const myDate2 = Date.now();
console.log(myDate2);


const test = new Date(122333);
console.log(test);

console.log();