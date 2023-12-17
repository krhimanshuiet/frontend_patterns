import React, { useCallback, useState } from 'react'
import useListing from '../HooksPattern/useListing'

const Input = (props) => {
    const listings = useListing();
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState('');
    const toggle = useCallback(() => setOpen(prev => !prev) , [])
    const handleClick = useCallback((name,city) => {
        setValue(`${name},${city}`)
        setOpen(false)
    },[])
  return (
    <div className='flyout'>
        <input
        onFocus={toggle}
        // onBlur={toggle}
        onChange={(e) => setValue(e.target.value)}
        className='flyout-input'
        placeholder='Enter an address,city,or ZIP code'
        value={value}
        {...props}
        />

        {open && (
            <div className='flyout-list'>
                <ul>
                    {listings.map(({name,city}) => <li key={name} onClick={() => handleClick(name,city)} className='flyout-list-item'>{`${name},${city}`}</li>)}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Input