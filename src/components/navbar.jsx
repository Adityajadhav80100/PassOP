import React from 'react'

function navbar() {
  return (
    <div className='bg-blue-500 p-3 text-white flex justify-between'>
        <div className="text-3xl flex">
        <span className='text-blue-950 font-bold'>&lt;</span>
        <h1 className='text-3xl font-bold'>Pass</h1>
        <span className='text-blue-950 font-bold'>OP/&gt;</span> 
        </div>
             <ul className=''>
                <a className='px-1' href="">Home</a>
                <a className='px-1' href="">About</a>
                <a className='px-1' href="">Contact</a> 
            </ul> 
    </div>
  )
}

export default navbar
