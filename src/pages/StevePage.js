// import React from 'react'
import { useState } from "react";
import Card from "../components/card/Card"

export default function StevePage() {

  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);


  const handleShow = () => {
    setShow(!show);
  }
  // const handleClick = () => {
  //   // alert(`bonjour ${name}`);
  //   setShow(show + 1);
  // };
  
  const incrementCount = () => {
    if (count < 10)
    setCount(count + 1)
  };
  const decrementCount = () => {
    if (count > 0 ) {
    setCount (count - 1)
    }
  };
  


  return (
    <div className='px-24 py-20'>
      <Card 
      url_img="steve.png"
      name="Steve Jobs"
      content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minima totam expedita dicta perferendis possimus, cum, omnis blanditiis perspiciatis iusto voluptatum soluta adipisci excepturi. Iusto assumenda blanditiis itaque iste suscipit?"
      />
      <div className="my-10">
        <p className="text-3xl font blakc text-blue-500 pb-6">Likes: {count}</p>
        {/* décrémenté -1 */}
        <button onClick={decrementCount} className="bg-pink-500 text-white p-3 rounded-lg mb-5">décrémenter</button>
        {/* incrémenté +1*/}
        <button onClick={incrementCount} className="bg-blue-500 text-white p-3 rounded-lg mb-5 ml-6">incrémenté</button>
        <div>
          <button onClick={handleShow} className= {`${
            show ? "bg-indigo-600":"bg-green-600" } text-white p-3 rounded-lg mb-5 block`}>
            {show  ? "cacher" : "voir"}
            </button>
          {show === true && (
          <div className="bg-green-100 p-10 max-w-md text-lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis aspernatur cumque dolorem sit deserunt dolor rem corrupti. Deleniti voluptatum dicta saepe quia placeat delectus natus quasi unde sapiente eum?</p>
          </div>
          )}
          
          
        </div>
      </div>
    </div>
    
  )
}
