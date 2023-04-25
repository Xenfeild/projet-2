import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useParams } from 'react-router-dom';


export default function ShowPost() {
  const {id} = useParams();
  console.log('id:', id)
  const [post, setPost]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(() =>{
      fetch(API_URL)
      .then((res) => res.json())
      .then(resultat => {
        // console.log("resultat:", resultat)
        setIsLoading(true);
        setPost(resultat); 
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
        <Layout>
          <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
        </Layout>
      )
    
    } 

  return (
    <Layout>
        <div className='px-24 py-20 text-center flex justify-center flex-col'>
            <h1 className='font-bold text-center text-3xl text-indigo-600'>{post.title}</h1>
            <div className='w-1/2 p-10 flex -justify-center'>
            <img src={`https://img-9gag-fun.9cache.com/photo/anz4Q3q_460s.jpg`} alt='' />
            </div>
            <p className=''>{post.body}</p>
        </div>
    </Layout>
  )
}
