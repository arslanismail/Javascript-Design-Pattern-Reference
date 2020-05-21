const Person = require("./person");

class Instructor extends Person {
  constructor(name, possition, earning) {
    super(name);
    this.possition = possition;
    this.earning = earning;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Instructor;
