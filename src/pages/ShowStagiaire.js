import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useParams } from 'react-router-dom';


export default function ShowStagiaire() {
  const {id} = useParams();
  const [data, setData]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

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
            <img src="https://static.wikia.nocookie.net/villains-fr/images/4/49/Sergeant_Hartman.jpg/revision/latest?cb=20200829134446&path-prefix=fr" alt="" />
            <p className='text-green-700 text-center text-2xl'>Mais surtout tu prend ton temp hein mon cannard!!</p>
        </Layout>
    )


  } else if (error){
      return (
          <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
      )
    
    } 

  return (
    <Layout>
      <div className="px-24 py-20 flex justify-center text-center">
        <img src="https://image.noelshack.com/fichiers/2017/25/5/1498252867-ram5.png" alt="" />
        <div className=''>
          <h2 className='font-bold text-3xl text-blue-600 mb-10'>{data.name}</h2>
          <p className='mb-2 text-xl'><span className='font-bold'>pseudo: </span>{data.username}</p>
          <p className='mb-2 text-xl'><span className='font-bold'>email: </span>{data.email}</p>
          <p className='mb-2 text-xl'><span className='font-bold'>téléphone: </span>{data.phone}</p>
          <p className='mb-2 text-xl'><span className='font-bold'>site: </span>{data.website}</p>
        </div>
      </div>
        {/* <div className='px-24 py-20 text-center flex justify-center flex-col'>
            <h1 className='font-bold text-center text-3xl text-indigo-600'>{post.title}</h1>
            <div className='w-1/2 p-10 flex -justify-center'>
            <img src={`https://img-9gag-fun.9cache.com/photo/anz4Q3q_460s.jpg`} alt='' />
            </div>
            <p className=''>{post.body}</p>
        </div> */}
    </Layout>
  )
}
