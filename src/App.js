import { useState } from 'react';
import CourseInput from './components/CourseInput';
import CourseList from './components/CourseList';

function App() {

  const [courseList, setCourseList] = useState('');

  const addListHandler = enteredText => {
    setCourseList(enteredText);
  }

  let content = (
    <p>No goals found. </p>
  )

  return (
    <div>
      <CourseInput onAddList={addListHandler} />
      <CourseList />
    </div>
  );
}

export default App;
