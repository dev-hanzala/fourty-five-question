let guests = ["Ada Lovelace", "Edward Hubble", "Albert Eienstein", "Amelia Earheart", "Stephen Hawking", "Marie Curie"];

while(guests.length>2){
	let removedGuests = guests.pop();
	console.log(`Sorry ${removedGuests}, I can't invite you.`)
};

guests.forEach(guests => {
	console.log(guests);
});

// Note to self:
// Another way to do this.
// guests.splice(1, guests.length-2);