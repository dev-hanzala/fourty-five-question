let guest:String[] = ["Albert Eienstien", "Issac Newton", "Stephen Hawking"];

guest.forEach(guest => {
	console.log(`Hi ${guest}, would you like to have dinner at my place?`);
})

let cantAttend = "Issac Newton";

console.log(`${cantAttend} can't attend.`);

let replacementGuest = "Edward Hubble";
guest[guest.indexOf(cantAttend)] = replacementGuest;

guest.forEach(guest => {
	console.log(`Hi ${guest}, would you like to have dinner at my place?`);
})
