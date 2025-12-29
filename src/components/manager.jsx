import React from 'react'
import { useRef } from 'react'
// No import needed for public assets
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

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
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
     toast(' Password saved!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    console.log(form)
    setPasswordArray([...PasswordArray, {...form , id:uuidv4()}])
    localStorage.setItem("password", JSON.stringify([...PasswordArray, {...form , id:uuidv4()}]))
    console.log([...PasswordArray, {...form , id:uuidv4()}])
    setform({ site: "", username: "", password: "" })
    }else{
      toast.error("Plz Enter Password ", {
        
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
    
  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handlecopy = (text) => {
    toast(' copied!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    navigator.clipboard.writeText(text);

  }
  const handledit = (id) => {
    
   setform(PasswordArray.filter(i=>i.id===id)[0])
   setPasswordArray(PasswordArray.filter(item=>item.id!=id))
   
  }

  const handledelete = (id) => {
     toast(' password deleted!',
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    setPasswordArray(PasswordArray.filter(item=>item.id!=id))
     localStorage.setItem("password", JSON.stringify(PasswordArray.filter(item=>item.id!=id)))
  }


  return (
    <div>
      <div><Toaster position="top-right"
        reverseOrder={false} /></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className=" pt-5 max-w-3xl mx-auto px-4">

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
              className='text-black w-full border h-6 mt-2  rounded-full p-1'
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
          {PasswordArray.length === 0 && <h1 className='text-center text-gray-500'>No passwords saved yet.</h1>}
          {PasswordArray.length !== 0 && <table className="table-auto w-full ">
            <thead className='bg-blue-400'>
              <tr >
                <th className='py-1'>Site</th>
                <th className='py-1'>Username</th>
                <th className='py-1'>Password</th>
                <th className='py-1'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-blue-100'>
              {PasswordArray.map((item, idx) => {
                return <tr key={item.site + item.username + idx}>
                  <td className='  text-center py-1 border  border-white min- w-15'>
                    <div className="flex justify-center">
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className="cursor-pointer mt-1.5 mx-2.5 " onClick={() => { handlecopy(item.site) }}>
                        <img src="/icons/copy.png" className='w-3 h-3 hover:w-3.5 hover:h-3.5' alt="copy" />
                      </div>
                    </div>
                  </td>
                  <td className='  text-center py-1 border  border-white min- w-15'>
                    <div className="flex justify-center">
                      <a href="" target='_blank'>{item.username}</a>
                      <div className="cursor-pointer mt-1.5 mx-2.5 " onClick={() => { handlecopy(item.username) }}>
                        <img src="/icons/copy.png" className='w-3 h-3 hover:w-3.5 hover:h-3.5' alt="copy" />
                      </div>
                    </div>
                  </td>
                  <td className='  text-center py-1 border  border-white min- w-15'>
                    <div className="flex justify-center">
                      <a href="" target='_blank'>{item.password}</a>
                      <div className="cursor-pointer mt-1.5 mx-2.5 " onClick={() => { handlecopy(item.password) }}>
                        <img src="/icons/copy.png" className='w-3 h-3 hover:w-3.5 hover:h-3.5' alt="copy" />
                      </div>
                    </div>
                  </td>
                  <td className=' text-center py-1 border  border-white min- w-15'>
                    <div className="flex justify-center ">
                      <div className="cursor-pointer mt-1.5 mx-2.5 " onClick={() => { handledit(item.id) }}>
                        <img src="/icons/edit.png" className='w-3 h-3 hover:w-3.5 hover:h-3.5' alt="copy" />
                      </div>
                      <div className="cursor-pointer mt-1.5 mx-2.5 " onClick={() => { handledelete(item.id) }}>
                        <img src="/icons/delete.png" className='w-3 h-3 hover:w-3.5 hover:h-3.5' alt="copy" />
                      </div>
                    </div>
                  </td>

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
