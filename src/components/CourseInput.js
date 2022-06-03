import { useState } from "react";

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
    props.onAddCourse(enteredValue)
    setEnteredValue("");
  };

  return (
    <form onSubmit={showListHandler}>
      <div>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={inputChangeHandler} />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
