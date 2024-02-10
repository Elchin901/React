import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div>
        <img className='postImg'
        src='https://miro.medium.com/v2/resize:fit:1096/1*RgCsj3vPWBJ_eYf-kx8JZA.png'
        alt=''
        />

        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>music</span>
                <span className='postCat'>life</span>
            </div>
            <span className='postTitle'>
                lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
    </div>
  );
}
