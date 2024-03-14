let users = ["Adil","Imran", "Adil", "Imran", "Irtiza"];
let checkedUsers:String[] = [];
users.forEach(user => {
	// console.log(user); for debugging
	let i = 0;
	let timesFound = 0;
	while(i < users.length){
		// console.log(i + timesFound); for debugging
		if (users[i] == user){
			timesFound++;
		};
		// console.log(timesFound); for debugging
		if (timesFound > 1 && checkedUsers.indexOf(user) == -1){
			console.log(`${user} is listed more then once.`);
			checkedUsers.push(user);
		};
		i++;
	};
});
