
import { dataNav } from "../../data/Data";
import { Link, useLocation } from "react-router-dom";
import React from "react";



export default function Navigation() {
    let route = useLocation().pathname;
    console.log("route", route);
    let activeStyle = "bg-red-500 border-2 border-yellow-500 font-bold px-2 py-1 text-xl rounded-lg";
    // const [color, setColor] = useState('bg-blue-600');
    // const handleChangeColor = () =>{
        // setColor('bg-red-600');
  return (
                <ul className= "flex  bg-indigo-600 text-white justify-between px-24 py-6">
                <Link to='/steve'>
                    <li className="font-black text-3xl">GOAT.</li>
                    </Link>
                <div className="flex space-x-5">
                    {dataNav.map((item) =>(
                <Link to={item.url} key={item.id}>
                    <li className={route === item.url ? activeStyle : ""}>{item.name}</li>
                </Link>
                ))}
                    <button className="bg-gray-50 p-2">
                        changer couleur
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
