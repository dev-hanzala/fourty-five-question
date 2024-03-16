var magicions = ["Alan", "Ada", "Oden"];
function greatifier(magicion) {
    // for (let i:number = 0; i < magicions.length; i++){
    // 	magicions[i] = magicions[i] + " the great";
    // };
    magicions.forEach(function (magicion) {
        magicions[magicions.indexOf(magicion)] = magicions[magicions.indexOf(magicion)] + " the great";
    });
}
;
function displayMagicions(magicions) {
    magicions.forEach(function (magicion) {
        console.log(magicion);
    });
}
;
greatifier(magicions);
displayMagicions(magicions);
