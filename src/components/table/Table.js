import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';

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
<table class="table-auto space-x-7">
  <thead>
    <tr>
      <th>id</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>{data.email}</td>
    </tr>
    {/* <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr> */}
  </tbody>
</table>
  )
}
}

