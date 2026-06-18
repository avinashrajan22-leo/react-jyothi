import React from 'react'

const Form = () => {
  return (
    <>
    <h1>Form task</h1>
    <form>
      <label htmlfor="name">Name</label>
      <input type="text" id="name" name="name"/>
      <br/>
      <label htmlfor="email">email</label>
      <input type="email" id="email" name="email"/>
      <br/>
      <label htmlfor="password">password</label>
      <input type="password" id="password" name="password"/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form