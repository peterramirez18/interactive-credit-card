import React from 'react'

const TextField = ({ label, name, id, onBlur, type, value, placeholder, onChange, className }) => {
    return (
        <div className='flex flex-col'>
            <label className="label" htmlFor="">
                {label}
            </label>
            <input
                onChange={onChange}
                className={`input ${className}`}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onBlur={onBlur}
                value={value}
            />
        </div>
    )
}

export default TextField