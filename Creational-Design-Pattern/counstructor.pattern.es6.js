class Course {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  toString() {
    return this.title + "... Author: " + this.author;
  }
}
