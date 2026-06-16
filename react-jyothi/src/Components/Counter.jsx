import React from 'react'

const Counter = () => {
    const [count,setCount]=
    React.useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const dec=()=>{
        setCount(count-1)
    }
    const res=()=>{
        setCount(0)
    }
  return (
    <>
    <h1>Count APP</h1>
    <h2>Count:{count}</h2>
    <button onClick={increment}>Inc</button>
    <button onClick={dec}>Dec</button>
    <button onClick={res}>Res</button>
    </>
  )
}

export default Counter