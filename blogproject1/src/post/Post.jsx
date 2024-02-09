import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div>
        <img className='postImg'
        src=''
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
        </div>
    </div>
  )
}
