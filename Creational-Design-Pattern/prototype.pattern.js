var Course = function (title, author) {
  this.title = title;
  this.author = author;
};

Course.prototype.toString = function (arguments) {
  console.log(this.title + "... Author: " + this.author);
};

var course_1 = new Course("English", "Arslan");
var course_1 = new Course("Quantaum Physics", "Arslan");
