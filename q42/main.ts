function albumCreator(artist: string, title: string, numberOfSongs?: number){
	let album = {artist, title};
	if (numberOfSongs){
		album["numberOfSongs"] = numberOfSongs;
	};
	return album;
};

console.log(albumCreator("Artist One", "The First Album"));
console.log(albumCreator("Artist Two", "The Second Album"));
console.log(albumCreator("Artist Three", "The Third Album", 12));
