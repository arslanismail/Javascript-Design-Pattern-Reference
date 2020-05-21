class Course {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    console.log(this.title + "... Author: " + this.author);
  }
}

module.exports = Course;
