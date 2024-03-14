var users = ["Adil", "Imran", "Adil", "Imran", "Irtiza"];
var checkedUsers = [];
users.forEach(function (user) {
    // console.log(user); for debugging
    var i = 0;
    var timesFound = 0;
    while (i < users.length) {
        // console.log(i + timesFound); for debugging
        if (users[i] == user) {
            timesFound++;
        }
        ;
        // console.log(timesFound); for debugging
        if (timesFound > 1 && checkedUsers.indexOf(user) == -1) {
            console.log("".concat(user, " is listed more then once."));
            checkedUsers.push(user);
        }
        ;
        i++;
    }
    ;
});
