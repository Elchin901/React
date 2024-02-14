import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profil Picture</label>
                <div className='settingsPP'>
                    <img
                    src='https://64.media.tumblr.com/bfcf744e5d2c9e025ba0d95453fc6160/9946ea88acd61b4f-f9/s540x810/71a9e81c32a89c189bf3d0aed8efdf545f2a2d05.jpg'
                    alt=''
                    />
                    <label htmlFor='fileInput'>
                        <i className="settingsPPIcon fa-solid fa-skull"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}></input>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Luffy'></input>
                <label>Email</label>
                <input type='email' placeholder='luffy@gmail.com'></input>
                <label>Password</label>
                <input type='password'></input>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
   
  )
}
