var game = {
    name: "Stardew Valley",
    developer: "Concerned Ape",
    genre: "Farming",
    isIndie: true,
    is3d: false
};
console.log("Is Teraria? Probably Not.");
console.log(game.name == "Terraria");
console.log("Is Stardew Valley? Probably Yes.");
console.log(game.name == "Stardew Valley");
console.log("Is developed by Relogic? Probably Not.");
console.log(game.developer == "Relogic");
console.log("Is developed by Concerned Ape? Probably Yes.");
console.log(game.developer == "Concerned Ape");
console.log("Is not Indie? Probably Not.");
console.log(!game.isIndie);
console.log("Is Indie? Probably Yes");
console.log(game.isIndie);
console.log("Is 3D? Probably Not.");
console.log(game.is3d);
console.log("Is 2D? Probably Yes.");
console.log(!game.is3d);
console.log("Is Racing? Probably Not.");
console.log(game.genre == "Racing");
console.log("Is Farming? Probably Yes.");
console.log(game.genre == "Farming");
