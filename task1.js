var levels = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class User {
    constructor(userName, xp, log) {
        this.userName = userName;
        this.xp = xp;
        this.log = log;
    }

    newSolvedChallengel(obj) {
        let v = obj.Level;
        // console.log(v)
        this.xp = this.xp + levels[v];
        // console.log(this.xp);
        this.log.push(obj.id);
        // console.log(this.log);
    }

}

var user1 = new User("JAD", 0, []);
console.log(user1);
user1.newSolvedChallengel({
    id: 1,
    Level: 'VE'
});

let o = {
    id: 2,
    Level: 'ME'
};
user1.newSolvedChallengel(o);
console.log(user1.xp);
console.log(user1.log);