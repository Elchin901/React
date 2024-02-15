import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePots from '../../components/singlePost/SinglePots'
import "./single.css"

export default function Single() {
  return (
    <div className='single'>
      <SinglePots/>
      <Sidebar/>
    </div>
  )
}
