var guests = ["Edward hubble", "Albert Eienstein", "Stephen Hawking"];
guests.push("Marie Curie"); // Add to the end of the array.
guests.splice(guests.length / 2, 0, "Amelia Earheart");
guests.unshift("Ada Lovelace"); // Add to the start of the array.
guests.forEach(function (guests) {
    console.log(guests);
});
