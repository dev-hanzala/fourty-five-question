function sandwichMaker() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("A sandwich with ".concat(ingredients.join(", "), "."));
}
;
sandwichMaker("cheese", "mayo", "ketchup", "lattace");
sandwichMaker("turkey", "lettuce", "tomato");
sandwichMaker("avocado", "sprouts", "mustard", "mayo");
