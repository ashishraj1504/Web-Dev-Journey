// import React from 'react'
// import Card from './components/Card'
import { useState } from 'react';
// import Navbar from './components/Navbar'
const App = () => {
  // let a = 0
  // const [num, setNum] = useState(0)

  const [name, setName] = useState('')
  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()
    const oldAllUsers = [...allUsers]
    oldAllUsers.push(name)

    console.log(oldAllUsers);
    setallUsers(oldAllUsers)
    setName('')
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

      <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <input type="text" placeholder="Enter name" required value={name} onChange={(e)=>{
            setName(e.target.value)
          }}/>
        <button>Submit</button>
      </form>


    </div>
  )
}

export default App