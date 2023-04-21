import { Icon } from 'Icons'
import React from 'react'

export default function DownloadApp() {
  return (
    <a href='#' className='h-10 flex flex-shrink-0 text-sm text-link font-semibold hover:text-white items-center px-6 gap-x-4'>
        <Icon name="download" size={20}/>
        Uygulamayi Yukle 
    </a>
  )
}
