import React from 'react'

const card = (props) => {
  console.log(props);
  
  return (
    <div>
      <div className="card">
            <h1>{props.user}-{props.age}</h1>
            <p>{props.des}</p>
            <button>View Profile</button>
      </div>
    </div>
  )
}

export default card
