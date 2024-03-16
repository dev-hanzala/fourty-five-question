function albumCreator(artist, title, numberOfSongs) {
    var album = { artist: artist, title: title };
    if (numberOfSongs) {
        album["numberOfSongs"] = numberOfSongs;
    }
    ;
    return album;
}
;
console.log(albumCreator("Artist One", "The First Album"));
console.log(albumCreator("Artist Two", "The Second Album"));
console.log(albumCreator("Artist Three", "The Third Album", 12));
