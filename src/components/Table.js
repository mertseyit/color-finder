import React from 'react'

const Table = ({color}) => {
  return (
    <div style={{backgroundColor:color}} className='table'>
       <p style={color === "black" ? {color:"white"}: {color:"black"}}>Enter a color and see changes !</p>
    </div>
  )
}

export default Table