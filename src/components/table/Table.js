import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout';
import { Link, useParams } from 'react-router-dom';

export default function Table()  {
  const {id} = useParams();
  console.log('id:', id)
  const [data, setData]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/users`;

    useEffect(() =>{
      fetch(API_URL)
      .then((res) => res.json())
      .then(resultat => {
        // console.log("resultat:", resultat)
        setIsLoading(true);
        setData(resultat); 
      },
      // capture the error
      (error) => {
        setError(error.message);
      }
      
      );
    }, []);

  if (!isLoading){
    return(
        <Layout>
            <p className='text-green-700 text-center text-2xl'>va te chercher un café ca charge</p>
        </Layout>
    )


  } else if (error){
      return (
        <Layout>
          <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
        </Layout>
      )
    
    } else {


  return (

    <div className="flex justify-center py-24 px-2 text-center text-2xl">
      <table class="table-auto ">
        <thead className='bg-blue-200'>
          <tr>
            <th className='w-1/4 p-5'>id</th>
            <th className='w-1/4 p-5'>Nom</th>
            <th className='w-1/4 p-5'>Email</th>
            <th className='w-1/4 p-5'>Téléphone</th>
            <th className='w-1/4 p-5'>Voir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
          <tr key={item.id}>  
            <td className='p-5'>{item.id}</td>
            <td className='p-5'>{item.name}</td>
            <td className='p-5'>{item.email}</td>
            <td className='p-5'>{item.phone}</td> 
            <Link to={`/user/${item.id}`}>        
              <td className='p-5'>Voir</td>   
            </Link>      
          </tr>
        ))}        
      </tbody>
    </table>
  </div>
  )
}
}

