var Course = function (title, author) {
  this.title = title;
  this.author = author;

  this.toString = function () {
    return this.title + "... Author: " + this.author;
  };
};

var course_1 = new Course("English", "Arslan");
var course_1 = new Course("Quantaum Physics", "Arslan");
