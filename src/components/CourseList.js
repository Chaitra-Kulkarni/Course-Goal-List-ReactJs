import "./CourseList.css";

const CourseList = (props) => {
  return (
    <div className="wrapper">
      <ul className="course-list">
        {props.courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
