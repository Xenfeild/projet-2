import React, { useState } from "react";
import { dataNav } from "../../data/Data";
import { Link } from "react-router-dom";



export default function Navigation() {
    const [color, setColor] = useState('bg-blue-600');
    const handleChangeColor = () =>{
        setColor('bg-red-600');
    }
  return (
    // <div className="flex  text-white justify-around p-10">
    //     <div className="flex items-center justify-around">
    //         <h1 className="uppercase font-bold text-4xl">goat.</h1>
    //         <div className=" flex justify-end">
                <ul className={`${color}flex  bg-indigo-600 text-white justify-between px-24 py-6`}>
                <Link to='/steve'>
                    <li className="font-black text-3xl">GOAT.</li>
                    </Link>
                <div className="flex space-x-5">
                    {dataNav.map((item) =>(
                <Link to={item.url} key={item.id}>
                    <li>{item.name}</li>
                </Link>
                ))}
                    <button className="bg-gray-50 p-2"
                        onClick={handleChangeColor}>change color
                        </button>

                </div>
            </ul>


                /* <Link to="/mark">
                    <li>Mark Zuckerberg</li>
                    </Link>
                <Link to="/elon">
                    <li>Elon Musk</li>
                    </Link>
                <Link to="/jack">
                    <li>Jack Ma</li>
                    </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link> */
    //         </div>
    //     </div>
    // </div>
  )
}
