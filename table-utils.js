function multiply() {
    let chiffreSaisi = parseInt(process.argv[2]);

    for (var i = 1; i <= 10; i++){
        var resultat = chiffreSaisi * i;
        console.log(chiffreSaisi + " * " + i + " = " + resultat);
    }
}

multiply();



/// Function Addition ///
function addition() {
    let chiffreSaisi = parseInt(process.argv[2]);

    for (var i = 1; i <= 10; i++){
        var resultat = chiffreSaisi + i;
        console.log(chiffreSaisi + " + " + i + " = " + resultat);
    }
}

 addition();