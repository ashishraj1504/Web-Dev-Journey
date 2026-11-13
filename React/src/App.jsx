// import React from 'react'
// import Card from './components/Card'
import { useState } from 'react';
// import Navbar from './components/Navbar'
const App = () => {
  // let a = 0
  // const [num, setNum] = useState(0)

  // const [name, setName] = useState('')
  // const [allUsers, setallUsers] = useState([])

  // const submitHandler = (e)=> {
  //   e.preventDefault()
  //   const oldAllUsers = [...allUsers]
  //   oldAllUsers.push(name)

  //   console.log(oldAllUsers);
  //   setallUsers(oldAllUsers)
  //   setName('')
  // }

  const [userName, setuserName] = useState('')
  const [userUrl, setuserUrl] = useState('')
  const [userRole, setuserRole] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setallUsers] = useState(localData)

  const submitHandler = (e)=> {
    e.preventDefault()
    
    const oldUsers = [...allUsers]
    oldUsers.push({userName,userUrl,userRole,userDesc})
    console.log(oldUsers);
    
    setallUsers(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))

    setuserName('')
    setuserUrl('')
    setuserRole('')
    setuserDesc('')
  }

  const deleteHandler = (idx)=>{
    const copyUsers = [...allUsers]
    copyUsers.splice(idx,1)
    setallUsers(copyUsers)
    localStorage.setItem('all-users',JSON.stringify(copyUsers))
    console.log("ele delete");
    
  }

  return (
    <div>
      {/* <h1 className='text-3l font-bold text-red-400'>Hello from App H1</h1>
      <h2 className='font-bold text-blue-500'>Hello from App H2</h2> */}

      {/*---------------------------------------------------*/}

      {/* <div className='p-3 h-screen bg-black'>
        <Card user='Ashish' age='22' />
        <Card user='Arnav' age='21' />
        <Card user='Atishey' age='20' />
      </div> */}

      {/*--------------------------------------------------*/}

      {/* <Navbar title="Sheryians" color='green' links={['Home', 'Services', 'Course', 'Contact']} /> */}

      {/* ------------------------------------ */}

      {/* <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}className='bg-pink-600 mx-2 rounded'>Increase</button>
      <button onClick={()=>{
        setNum(num-1)
      }}className='bg-pink-600 rounded'>Decrease</button> */}

      {/* ------form handling & 2 way binding------------ */}

      {/* <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <input type="text" placeholder="Enter name" required value={name} onChange={(e)=>{
            setName(e.target.value)
          }}/>
        <button>Submit</button>
      </form> */}

      {/* ---------- Delete & local Storage -------------- */}

      <div className='h-screen bg-black text-white'>
        <form onSubmit={(e)=>
          submitHandler(e)
        } className='flex flex-wrap justify-center p-2'>

          <input value={userName} onChange={(e)=>{
            setuserName(e.target.value)
          }} className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter your name'/>

          <input value={userUrl} onChange={(e)=>{
            setuserUrl(e.target.value)
          }} className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='image URL'/>

          <input value={userRole} onChange={(e)=>{
            setuserRole(e.target.value)
          }} className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Role'/>

          <input value={userDesc} onChange={(e)=>{
            setuserDesc(e.target.value)
          }} className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Description'/>
          
          <button className='px-5 py-2 active:scale-95 cursor-pointer bg-emerald-700 rounded m-2 w-[90%]'>Create User</button>
        </form>
        <div className='px-4 py-10 gap-4 flex flex-wrap'>
          {allUsers.map(function(elem,idx){
            return <div key={idx}>
              {elem.userName}
              <button onClick={()=>{
                deleteHandler(idx)
              }} className='px-5 py-2 w-fit active:scale-95 cursor-pointer bg-red-500 rounded m-2'>delete User</button>
            </div>
          })}
        </div>
      </div>



    </div>
  )
}

export default App