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
