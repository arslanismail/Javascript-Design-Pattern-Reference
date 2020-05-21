const Instructor = require("./instructor");
const Student = require("./student");

const UserFactory = (
  type,
  name,
  position,
  earnings = 0,
  level = "Beginner"
) => {
  switch (type) {
    case "instructor":
      return new Instructor(name, position, earnings);
      break;
    case "student":
      return new Student(name, level);
      break;
    default:
      return null;
  }
};

module.exports = UserFactory;
