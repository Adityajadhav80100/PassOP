import React from 'react'

function manager() {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
      linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
 
       <div className='  pt-5 container mx-auto '>
         <div className="text-3xl flex justify-center">
          <span className='text-blue-950 font-bold'>&lt;</span>
             <h1 className='text-3xl text-blue-300 font-bold'>Pass</h1>
          <span className='text-blue-950 font-bold'>OP/&gt;</span> 
        </div>
        <div className='text-[15px] flex justify-center'> Your own Password Manager</div>
        <div className=" flex flex-col justify-center  items-center   ">
                  <input className='text-black border w-full h-6 pt-1 rounded-full p-1'  placeholder='Enter website url' type="text  " />
        </div>
        <div className="flex gap-4">
                  <input className='text-black w-full border h-6 mt-2  rounded-full p-1' placeholder='Enter Username' type="text  " />
                  <input className='text-black w-full border h-6 mt-2  rounded-full p-1' placeholder='Enter Password' type="text  " />
        </div>
        <div className='flex justify-center *:mt-4 '>
        <button className=' border bg-blue-400  rounded-full w-50 p-1  hover:bg-blue-500 '>Add Password</button>

        </div>
     </div>     
    </div>
  )
}

export default manager
