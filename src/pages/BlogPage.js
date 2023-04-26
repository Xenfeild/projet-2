import React, { useEffect, useState } from 'react'
import CardBlog from '../components/card/CardBlog'
// import { dataBlog } from '../components/footer/data/dataBlog'
import Layout from '../components/layouts/Layout'

export default function BlogPage({blog}) {
  const [posts,setPosts] = useState([]);
  // console.log("posts : ", posts)
  const [error,setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // console.log("error: ", error);
  
  const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10"

    //1 utilise hook useEffect pour fetcher data de l'API
    //2 fetch me renvoie une promesse
    //3 ensuite je transforme réponse en json
    //4 ensuite je recupère le resultat en json et je stock mon state posts
    useEffect(() =>{
      fetch(API_URL)
      .then((res) => res.json())
      .then(resultat => {
        // console.log("resultat:", resultat)
        setIsLoading(true);
        setPosts(resultat); 
      },
      // capture the error
      (error) => {
        setError(error.message);
      }
      
      );
    }, []);

    if(!isLoading){
      return (<Layout>
      <p className='text-green-700 text-center text-2xl'>Ca charge va te cherche un café</p>
      </Layout>)
    } else if (error){
      return (
        <Layout>
          <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
        </Layout>
      )
    
    } else {

  return (
    <Layout>
    <div className='px-24 py-20'>
        
        <p className='text-center font-bold text-blue-600 text-4xl pb-6'>Bienvenu sur le blog</p>
        <div className="flex flex-wrap space-x-7 ">
        {
            
            posts.map((item) => (
                <CardBlog key={item.id} title={item.title} subtitle={item.subtitle} id={item.id}  url_img={item.url_img} content={item.content}/>
            ))
        }
        </div>
    </div>
    </Layout>
  )
}

}