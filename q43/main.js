var magicions = ["Alan", "Ada", "Oden"];
var greatMagicions = greatifier(magicions);
function greatifier(magicion) {
    var greatMagicions = [];
    magicions.forEach(function (magicion) {
        greatMagicions.push("".concat(magicion, " the great."));
    });
    return greatMagicions;
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
displayMagicions(greatMagicions);
