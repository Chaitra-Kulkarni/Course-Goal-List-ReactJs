const CourseList = (props) => {
  return (
    <ul>
      {props.courses.map((course) => (
        <li key={course.id}>
            {course.name}
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
