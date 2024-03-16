function sandwichMaker(...ingredients:string[]) {
	console.log(`A sandwich with ${ingredients.join(", ")}.`);
	
};

sandwichMaker("cheese", "mayo", "ketchup", "lattace");
sandwichMaker("turkey", "lettuce", "tomato");
sandwichMaker("avocado", "sprouts", "mustard", "mayo");
