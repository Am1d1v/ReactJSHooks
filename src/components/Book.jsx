import React from 'react'

function Book({id, title}) {

  return (
    <div>
        <h3>{title}</h3>
        <p>{id}</p>
    </div>
  )
}

export default Book