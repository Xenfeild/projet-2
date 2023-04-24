import React, { useState } from 'react'
import InputComponents from '../components/inputs/InputComponents'

export default function Contact() {
    const [inputs, setInputs] = useState([]);
    console.log("inputs:", inputs)
    

    const handleChange = (event) => {
        console.log("event:", event.target.value);
        // je cible mes values de mes inputs
        const value = event.target.value;
        // je set toutes les valeurs et leur clé dans mon tableau inputs
        const name = event.target.name;

        setInputs((values) => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        // modifie la soumission du formulaire par défault
        event.preventDefault();
        alert(inputs);
    }
    
  return (
    <div className='px-24 py-20'>
        <h1 className='font-bold text-3xl pb-8 text-center'>Nous contacter</h1>
        <form className='flex item-center flex-col' onSubmit={handleSubmit}>
            {/* prenom + nom */}
            <div className="flex space-x-6 mt-5">
                <InputComponents  label="Prenom" name="fName" value={inputs.fName || ""} onChange={handleChange}/>
                <InputComponents  label="Nom" name="lName" value={inputs.lName || ""} onChange={handleChange}/>
            </div>
            {/* email + mot de passe */}
            <div className="flex space-x-6 mt-5">
                <InputComponents  label="E-mail" name="email" type='email' value={inputs.email || ""} onChange={handleChange}/>
                <InputComponents  label="Mot de passe" name="password" type='password'value={inputs.password} onChange={handleChange}/>
            </div>
            {/* adresse 1 */}
            <div>
                <InputComponents  label="adresse1" name="adresse1" value={inputs.adresse1 || ""} onChange={handleChange}/>
            </div>
            {/* adresse 2 */}
            <div>
                <InputComponents  label="adresse2" name="adresse1" value={inputs.adresse1 || ""} onChange={handleChange}/>
            </div>
            <div className="flex space-x-6 mt-5">
                <InputComponents  label="ville" name="city" value={inputs.city || ""} onChange={handleChange}/>
                <InputComponents  label="code postal" name="code_postal" type='number' value={inputs.code_postal || ""} onChange={handleChange}/>
            </div>
            <input type="submit" value="envoyer" className='bg-blue-500 p-3 text-white rounded-lg mt-5 w-full'/>
        </form>
    </div>
  )
}
