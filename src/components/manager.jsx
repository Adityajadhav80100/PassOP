import React from 'react'
import { useRef } from 'react'
// No import needed for public assets


import { useState, useEffect } from 'react';

function Manager() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [PasswordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("password");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }

  const savepasswords = () => {
    console.log(form)
    setPasswordArray([...PasswordArray, form])
    localStorage.setItem("password", JSON.stringify([...PasswordArray, form]))
    console.log([...PasswordArray, form])
  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

     <div className="pt-5 max-w-3xl mx-auto px-4">

        <div className="text-3xl flex justify-center">
          <span className='text-blue-950 font-bold'>&lt;</span>
          <h1 className='text-3xl text-blue-300 font-bold'>Pass</h1>
          <span className='text-blue-950 font-bold'>OP/&gt;</span>
        </div>
        <div className='text-[15px] flex justify-center'> Your own Password Manager</div>
        <div className=" flex flex-col justify-center  items-center   ">
          <input value={form.site} onChange={handlechange} name='site' className='text-black border w-full h-6 pt-1 rounded-full p-1' placeholder='Enter website url' type="text" />
        </div>
        <div className="flex gap-4">
          <input value={form.username} onChange={handlechange} name='username' className='text-black w-full border h-6 mt-2  rounded-full p-1' placeholder='Enter Username' type="text" />
          <div className="relative w-full">
            <input value={form.password} onChange={handlechange} name='password'
              className='text-black w-full border h-10 mt-2  rounded-full p-1'
              placeholder='Enter Password'
              type={showPassword ? 'text' : 'password'}
            />
            <img
              onClick={handleShowPassword}
              className='absolute right-3 top-5 transform -translate-y-1/2 w-4 h-4 cursor-pointer'
              src={showPassword ? "/icons/eyeopen.webp" : "/icons/eyeclose.webp"}
              alt={showPassword ? "Hide Password" : "Show Password"}
            />
          </div>
        </div>
        <div className='flex justify-center relative *:mt-4 '>
          <button onClick={savepasswords} className=' border bg-blue-400  rounded-full w-50 p-1  hover:bg-blue-500 '>Add Password</button>
        </div>
        <div className="passwordlist mt-3">
          <h1 className=' font-bold text-2xl mb-2'>Your Passwords</h1>
          {PasswordArray.length===0 && <h1 className='text-center text-gray-500'>No passwords saved yet.</h1>}
         {PasswordArray.length !==0 && <table className="table-auto w-full ">
            <thead className='bg-blue-400'>
              <tr >
                <th className='py-1'>Site</th>
                <th className='py-1'>Username</th>
                <th className='py-1'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-blue-100'>
              {PasswordArray.map((item, idx) => {
                return  <tr key={item.site + item.username + idx}>
                  <td className=' text-center py-1 border  border-white min- w-15'><a href={item.site} target='_blank'>{item.site}</a></td>
                  <td className=' text-center py-1 border  border-white min- w-15'>{item.username}</td>
                  <td className=' text-center py-1 border  border-white min- w-15'>{item.password}</td>
                </tr>
              })}
             
            </tbody>
          </table>
            }
        </div>
      </div>
    </div>
  )
};
export default Manager
