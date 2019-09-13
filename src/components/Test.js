import React, { useState } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='test'>
      <h1>Hello I am test</h1>
      <p>The count is {count}</p>
    </div>
  )
}

export default Test
