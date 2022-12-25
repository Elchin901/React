import React from "react";
import ReactDOM  from "react-dom";
import App2 from "./components/App2"

ReactDOM.render( <App2/>,document.getElementById("root"));




//Challenge:
//1. Given that you can get the current time using:
 let time = new Date().toLocaleTimeString();
 console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

























// import React from 'react';
// import ReactDOM  from 'react-dom';
// import {add,multiply,subtract,divide} from './App.js';

// ReactDOM.render(


//   <ul>
//     <li>{add(1,2)}</li>
//     <li>{multiply(3,4)}</li>
//     <li>{subtract(7,8)}</li>
//     <li>{divide(9,8)}</li>
//   </ul>,
  
//   document.getElementById('root')
// );
















// import React from "react";
// import  ReactDOM  from "react-dom";

// const date = new Date(2022, 10, 15, 19);
// const currentTime = date.getHours();

// let greeting; 

// const customStyle = {
//   color:""
// }


// if (currentTime < 12){
//   greeting="Good Morning";
//   customStyle.color="red";
// }else if (currentTime < 18){
//   greeting="Good Afternoon";
//   customStyle.color="green";
// }else{
//   greeting = "Good Night";
//   customStyle.color="blue";
// }

// ReactDOM.render(
  
//   <h1 className="heading" style={customStyle}>{greeting}</h1>,

// document.getElementById('root')
// )


















// import React from 'react';
// import ReactDOM  from 'react-dom';

// const name="Elchin";
// const curretDate = new Date();
// const year=curretDate.getFullYear();


// ReactDOM.render(

//   <div>
//     <h1 className = "heading">Hello World</h1>
//     <p>Created by {name}</p>
//     <p>Copyright {year}</p>
//       <img className ="size-img" alt='batman' src='https://i.insider.com/62225ce7dcce010019a6def1?width=1000&format=jpeg&auto=webp'></img>
//       <img className ="size-img" alt='flash' src='https://www.looper.com/img/gallery/the-dark-history-of-the-flash/l-intro-1623261395.jpg'></img>
//       <img className ="size-img" alt='superman' src='https://images.comicbooktreasury.com/wp-content/uploads/2021/06/Superman-New-52-Reading-Order.jpg'></img>
//   </div>,


//   document.getElementById("root")
// );