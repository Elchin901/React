import React , {useState} from "react";


function App2() {

    setInterval(change, 1000);

    const now = new Date().toLocaleTimeString();

    const [time,setTime] = (useState(now));
    

    function change(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }



  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={change}>Get Time</button>
    </div>
  );
}





// function App2(){

//     const [count,setCount] = useState(0);

//     function increase(){

//         setCount(count + 1);
        
//     }
//     function crease(){

//         setCount(count - 1);
        
//     }
//     return(
//         <div className="container">
//             <h1>{count}</h1>
//             <button onClick={increase}>+</button>
//             <button onClick={crease}>-</button>
//         </div>
//     );
// }

export default App2;