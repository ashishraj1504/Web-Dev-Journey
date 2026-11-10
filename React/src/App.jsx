// import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div>
      {/* <h1 className='text-3l font-bold text-red-400'>Hello from App H1</h1>
      <h2 className='font-bold text-blue-500'>Hello from App H2</h2> */}
      <div className='p-3 h-screen bg-black'>
        <Card user='Ashish' age='22' />
        <Card user='Arnav' age='21' />
        <Card user='Atishey' age='20' />
      </div>
  
    </div>
  )
}

export default App