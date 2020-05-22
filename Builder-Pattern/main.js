const CourseBuilder = require("./courseBuilder.js");

const course_1 = new CourseBuilder("Design Patterns 1")
  .makePaid(100)
  .makeCampain()
  .build();
const course_2 = new CourseBuilder("Design Patterns 2").build();

course_1.toString();
course_2.toString();
