import React, { useEffect, useState } from 'react'

function name(){
  return "Adit"
}

const course = () => {
  return <h3>PWL</h3>
}

const Helloworld = () => {
  const today = new Date();
  const [currDate, setCurrDate] = useState(today)
  const numbers = [1,2,3,4,5]

  const listItems = numbers.map((number) => 
    <li>{number}</li>
  )

  const countTimer = () =>{
    setCurrDate(new Date())
  }

  useEffect(()=>{
    setInterval(
      () => countTimer(), 100
     );
  }, [])

  return (
    <div>
      <h1>Helloworld</h1>
      <h1>Today is {today.toTimeString()}</h1>
      <h2>my name is {name()} {course()}</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Helloworld