import React from 'react'
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg'
        src='https://www.reactjsindia.com/blog/wp-content/uploads/2021/07/Node-Js-Vs.-ReactJs-Comparison-Which-To-Choose-For-Your-Js-Project.jpg'
        alt=''/>
    </div>
  )
}
