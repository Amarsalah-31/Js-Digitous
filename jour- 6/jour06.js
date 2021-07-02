 /// format ///
 function formatDate(dateString) {
  var date = new Date(dateString);
  var jj = date.getDate().toString().padStart(2, "0");
  var mm = (date.getMonth() + 1).toString().padStart(2, "0");

  console.log("Result:", `${jj}/${mm}/${date.getFullYear()}`)
}

formatDate("2020-11-15")
 ////Age ///
 function calculateAge(birthDay) {
  var date = new Date(birthDay);
  var age = new Date(new Date() - date);
  return age.getFullYear() - 1970;
}

console.log(calculateAge("1988-11-17"));

/// Validator///
var prompt = require("prompt");

var schema = {
  properties: {
    email: { pattern: /[a-z0-9]+\@[a-z]+\.[a-z]{2,3}/i, required: true, message:"Email non valide" },
    username: {pattern: /^[a-zA-Z-]+$/, required: true, message:"Username non valide"},
    password: {required: true, message:"Password non valide", conform: function (value) {
        if (value.search(/.{6,}/) === -1) {
            return false;
        }

        if (value.search(/[a-zA-Z]/) === -1) {
            return false;
        }

        if (value.search(/[0-9]/) === -1) {
            return false;
        }

        if (value.search(/[^a-zA-Z0-9-]/) > -1) {
            return false;
        }

        return true;
    }}
  },
};

prompt.start();
prompt.get(schema, (err, res) => {
    console.log(res);
});
///Bouns///
var moment = require("moment");

function formatDate(dateString) {
    console.log(moment(dateString).format("DD/MM/YYYY"));
}

formatDate("2020-02-27")

function calculateAge(dateString) {
    console.log(moment(dateString).fromNow());
}

calculateAge("2000-02-15")

////
  