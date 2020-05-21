<!--
Author: Arslan Ismail [AI] (arslanismail840@gmail.com)
Website : http://arslanismail.com/

-->

# JavaScript Design Patterns Reffrence

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

##### Module System Example :

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
