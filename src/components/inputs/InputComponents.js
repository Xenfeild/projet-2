import React from 'react'

export default function InputComponents({
  label, type = "text", name, value, onChange
}) {
  return (
    <div >
        <label>{label}</label>
        <input type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className='border-solid border-2 rounded-lg mt-2 p-1'/>
    </div>
  );
}
