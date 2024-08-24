
import { useState } from 'react';
import './App.css';
import Course from './Course';
import SearchHeader from './SearchHeader';



function getRandomCourse(){
  const courseArray = ['Javascript', 'Typescript', 'Nodejs', 'Vite'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}


function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  };

  const courseList = courses.map((course, index)=>{
    return <Course key={index} courseName={course} />
  });
  return (
    <div className="App">
      {/* <button onClick={handleClick}>Kurs Ekle</button>
      <div>{courseList}</div> */}
      <SearchHeader/>
      
      
    </div>
  );
}

export default App;
