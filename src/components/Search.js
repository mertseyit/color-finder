import React from 'react'

const Search = ({color, setColor}) => {
  return (
    <div>
        <input 
            type="text"
            className='search'
            value={color}
            onChange={(e) => setColor(e.target.value)}
         />
    </div>
  )
}

export default Search