const findTheOldest = function(people) {
    var oldest = 0;
    var oldestPerson = {};
    for (var i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            var currentTime = new Date()
            var year = currentTime.getFullYear()
            if (year - people[i].yearOfBirth > oldest) {
                oldest = year - people[i].yearOfBirth;
                oldestPerson = people[i];
            };
        };
        if (people[i].yearOfDeath - people[i].yearOfBirth > oldest) {
            oldest = people[i].yearOfDeath - people[i].yearOfBirth;
            oldestPerson = people[i];
        };
    };
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
