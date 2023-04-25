import React from 'react'
import Card from '../components/card/Card'
import Layout from '../components/layouts/Layout'

export default function ElonPage() {
  return (
    <Layout>
    <div className='flex justify-center m-10 space-x-5'>
      <Card 
      url_img="elon.png"
      name="Elon Musk"
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minima totam expedita dicta perferendis possimus, cum, omnis blanditiis perspiciatis iusto voluptatum soluta adipisci excepturi. Iusto assumenda blanditiis itaque iste suscipit?"
      />
    </div>
    </Layout>
  )
}
