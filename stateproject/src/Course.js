import Javascript from "./images/javascript.png"
import Nodejs from "./images/nodejs.png"
import Typescript from "./images/typescript.png"
import Vite from "./images/vite.png"


const courseMap ={
  Javascript,
  Nodejs,
  Typescript,
  Vite,
};


function Course({courseName}) {
  console.log(Javascript);
  console.log(courseName);
  return (
    <div>
      <img src={courseMap[courseName]} alt="" />
    </div>
  )
}

export default Course;
