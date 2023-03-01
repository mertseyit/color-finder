import React from 'react'

const Serach = ({color, setColor}) => {
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

export default Serach