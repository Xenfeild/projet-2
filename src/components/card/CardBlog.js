import React from 'react'
import { Link, } from 'react-router-dom'
// import { dataBlog } from '../footer/data/dataBlog'

export default function CardBlog({ subtitle, title, content, id}) {
  
  return (
    <div className='max-w-xs border-solid border-2 rounded m-2'>
      <Link to={`/post/${id}`}>
        <img src={`https://cdn.idealo.com/folder/Product/2505/5/2505544/s4_produktbild_gross/u-s-robotics-usr025630g-56k-faxmodem.jpg`} alt='' className=''/>
        <h2 className='text font-semibold pb-1'>{subtitle}</h2>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p>{content}</p>
        </Link>
    </div>

  )
}
