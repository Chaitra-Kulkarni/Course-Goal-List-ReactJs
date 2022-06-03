import { useState } from "react";
import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";

function App() {
  const [enteredCourse, setEnteredCourse] = useState([]);

  const AddCourseHandler = (course) => {
    setEnteredCourse((prevCourses) => {
      const updatedCourses = [
        ...prevCourses,
        { name: course, id: Math.random().toString() },
      ];
      // updatedCourses.unshift({ course });
      return updatedCourses;
    });
  };

  return (
    <div>
      <CourseInput onAddCourse={AddCourseHandler} />
      <CourseList courses={enteredCourse} />
    </div>
  );
}

export default App;
