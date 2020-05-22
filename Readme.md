<!--
Author: Arslan Ismail [AI] (arslanismail840@gmail.com)
Website : http://arslanismail.com/

-->

# JavaScript Design Patterns Reffrence

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This Project Is For Helping Developers To Go Through Diffrent JavaScript Design Patterns
via Examples And Explanations Save This Repo As A Reffrence.

## This Repo Covers Following Design Patterns

> 1. Module System
> 2. Constructor Pattern
> 3. Factory Pattern
> 4. Singleton Pattern

---

### Module System

- `Maintainablity` - Maintainability is the ease of using something the code is very stuctured and can be maintained easily as compare to large js files . Debugging becomes easy as well
- `NameSpace` - By Module System we can avoid Global Namespace conflict issue files only require modules exported with module.exports and avoid polluting global Namespace.
- `Resuablity` - With Module System in place your code becomes very re-useable we can import specif module in multiple files and can enhance thier functionality

##### Module System Example

Following is the example code to understand module system in javascript

###### Module-Pattern.js:

Module-Pattern.js File this is the file (This is the Module That will be exported and consumed by another file)

```javascript
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
```

###### Module-consumer.js:

Module-consumer.js File this is the file that will consume the Course Class from Module-Pattern.js file

```javascript
const Course = require("./module.pattern");

const course_1 = new Course("English", "Arslan");
course_1.toString();
```

---

### Factory Pattern

- `Adding Layer` - Factory Pattern Allows us to seprate the object creation from its implementation
- `Conditional` - To create a different instance based on condition
- `Abstraction` - Not To Expose the constructors of the objects, preventing their modification

##### Factory Pattern Example:

Following code files are the example for the factory pattern, let's take a use case that there are diffrent type of users and we have to create them via single function it makes sense to use factory pattern here .
Suppose we have User of type student and instructor that inherit Person class for commanalities and user factory that will generate and return new object of type student or instructor depends on the given condition.

###### Person.js:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
module.exports = Person;
```

###### student.js:

```javascript
const Person = require("./person");

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Student;
```

###### instructor.js:

```javascript
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
```

###### userFactory.js:

```javascript
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
```

###### main.js:

```javascript
const UserFactory = require("./userFactory");

const arslan = UserFactory("instructor", "Arslan", "Software Engineer", 1000);
const rasheed = UserFactory("student", "Rasheed", "Beginner");

console.log(arslan.toString());
console.log(rasheed.toString());
```

---

### Singleton Pattern

- `Restriction` - Restrict instantiation of a class to a single object
- `Universal Truth` - Keeps the same instance of that object through out application lifecycle

##### Singleton Pattern Example:

```javascript
const singleton = (() => {
  let course;
  const assignCourse = () => {
    const course = new Object("Javascript");
    return course;
  };
  return {
    getInstance: () => {
      if (!course) {
        course = assignCourse;
      }
      return course;
    },
  };
})();

const buyFirst = singleton.getInstance();
const buySecond = singleton.getInstance();
if (buyFirst === buySecond) {
  console.log("single instance for both objects");
}
```

---

### Builder Pattern

- `Simplification` - To simplify the construction of complex objects
- `Sepration` - To seprate the construction and representation

##### Builder Pattern Example:

###### course.js:

```javascript
class Course {
  constructor(builder) {
    this.name = builder.name;
    this.sales = builder.sales || 0;
    this.isFree = builder.isFree;
    this.price = builder.price || 0;
    this.isCampain = builder.isCampain;
  }

  toString() {
    return console.log(JSON.stringify(this));
  }
}

module.exports = Course;
```

###### courseBuilder.js:

```javascript
const Course = require("./course");

class CourseBuilder {
  constructor(name, sales = 0, price = 0) {
    this.name = name;
    this.sales = sales;
    this.price = price;
  }
  makePaid(price) {
    this.isFree = false;
    this.price = price;
    return this;
  }
  makeCampain() {
    this.isCampain = true;
    return this;
  }
  build() {
    return new Course(this);
  }
}

module.exports = CourseBuilder;
```

###### main.js:

```javascript
const CourseBuilder = require("./courseBuilder.js");

const course_1 = new CourseBuilder("Design Patterns 1")
  .makePaid(100)
  .makeCampain()
  .build();
const course_2 = new CourseBuilder("Design Patterns 2").build();

course_1.toString();
course_2.toString();
```
