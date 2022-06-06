import { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState([]);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const showListHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      return;
    }
    props.onAddCourse(enteredValue);
    setEnteredValue("");
  };

  return (
    <div className="wrapper-form">
      <form onSubmit={showListHandler}>
        <div className="course-input">
          <label>Course Goal</label>
          <input
            type="text"
            value={enteredValue}
            onChange={inputChangeHandler}
          />
        </div>
        <button className="course-button" type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default CourseInput;
