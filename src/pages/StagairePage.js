import React from 'react'
import Layout from '../components/layouts/Layout'
import Table from '../components/table/Table'

export default function StagairePage() {
  
  return (
    <Layout>
    <div className='text-center '>
      <h1 className='pt-20 font-bold text-blue-700 text-4xl'>La liste de nos stagiaires</h1>
      <Table/>
    </div>
    </Layout>
  )
}
