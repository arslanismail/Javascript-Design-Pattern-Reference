const UserFactory = require("./userFactory");

const arslan = UserFactory("instructor", "Arslan", "Software Engineer", 1000);
const rasheed = UserFactory("student", "Rasheed", "Beginner");

console.log(arslan.toString());
console.log(rasheed.toString());
