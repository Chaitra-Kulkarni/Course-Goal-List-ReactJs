import "./CourseList.css";

const CourseList = (props) => {
  return (
    <ul className="course-list">
      {props.courses.map((course) => (
        <li key={course.id}>
            {course.name}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
