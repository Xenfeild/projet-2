import React from 'react'

export default function Card({nameGoat, content, url_img}) {
  return (
    <div className='flex space-x-8'>
        <img src={`img/${url_img}`} alt="" max-w-sm/>
        <div>
            <h2 className=''>Hi, I'm{nameGoat}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}
