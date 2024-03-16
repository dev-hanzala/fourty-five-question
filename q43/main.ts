let magicions = ["Alan", "Ada", "Oden"];
let greatMagicions = greatifier(magicions);

function greatifier(magicion:string[]){
	let greatMagicions:string[] = [];
	magicions.forEach(magicion => {
		greatMagicions.push(`${magicion} the great.`);
	});
	return greatMagicions;
};

function displayMagicions (magicions:string[]){
	magicions.forEach(magicion => {
		console.log(magicion);
	});
};

greatifier(magicions);
displayMagicions(magicions);
displayMagicions(greatMagicions);