var guest = ["Albert Eienstien", "Issac Newton", "Stephen Hawking"];
guest.forEach(function (guest) {
    console.log("Hi ".concat(guest, ", would you like to have dinner at my place?"));
});
var cantAttend = "Issac Newton";
console.log("".concat(cantAttend, " can't attend."));
var replacementGuest = "Edward Hubble";
guest[guest.indexOf(cantAttend)] = replacementGuest;
guest.forEach(function (guest) {
    console.log("Hi ".concat(guest, ", would you like to have dinner at my place?"));
});
