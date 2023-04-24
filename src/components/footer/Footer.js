import React from 'react'

export default function Footer({color}) {
  return (
    <div className={`${color} bg-indigo-600 text-center text-white px-24 py-14 p-5`}>
        <p className='font-bold text-2xl'>Mon joli footer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis fugit minima enim, velit sapiente neque aspernatur dolores dolorum accusamus unde, aliquam molestias quos harum libero debitis excepturi nihil commodi?</p>
    </div>
  )
}
