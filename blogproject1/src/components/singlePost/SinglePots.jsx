import React from 'react'
import "./singlePost.css"

export default function SinglePots() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img
            src='https://c4.wallpaperflare.com/wallpaper/425/136/860/one-piece-nico-robin-roronoa-zoro-tony-tony-chopper-monkey-d-luffy-nami-one-piece-usopp-one-piece-anime-one-piece-hd-art-wallpaper-preview.jpg '
            alt=''
            className='singlePostImg'
            />
            <h1 className='singlePostTitle'>
                lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>    
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author:<b>Safak</b></span>
                <span className='singlePostDate'> 1 hour ago </span>
            </div>
            <p className='singlePostDesc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ad nesciunt ea minima autem est nisi assumenda beatae quidem,
                velit deserunt nemo magni! Sit quae voluptas quo cumque sint a?
            </p>
        </div>
    </div>
  )
}
