// import React from 'react'

const card = (props) => {
  return (
    <div className="bg-white border-2 border-red-500 rounded-xl m-2 w-fit p-3">
      <h1 className="text-2xl font-semibold ">
        {props.user} : {props.age}
      </h1>
    </div>
  )
}

export default card