import { useState } from "react";

const CourseInput = (props) => {

    const [enteredValue, setEnteredValue] = useState('');

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const showListHandler = event => {
        event.preventDefault();
        props.onAddList(enteredValue)
    }

    return(
        <form onSubmit={showListHandler}>
            <div>
                <label>Course Goal</label>
                <input type="text" onChange={inputChangeHandler} />
            </div>
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default CourseInput;