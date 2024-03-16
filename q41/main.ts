let magicions = ["Alan", "Ada", "Oden"];

function greatifier(magicion:string[]){
	magicions.forEach(magicion => {
		magicions[magicions.indexOf(magicion)] = magicions[magicions.indexOf(magicion)] + " the great";
	});
};

function displayMagicions (magicions:string[]){
	magicions.forEach(magicion => {
		console.log(magicion);
	});
};

greatifier(magicions);
displayMagicions(magicions);