import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name,setName] =useState()
  const [email,setEmail] =useState()
  const [age,setAge] =useState()
  const navigate=useNavigate()

  const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {
      console.log(result)
      navigate('/')
    
    })
    .catch(err =>console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Submit}>
      <h2>Add user</h2>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='enter a name'className='form-control' 
          onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='enter Email'className='form-control' 
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="text" placeholder='enter Age'className='form-control'
          onChange={(e)=>setAge(e.target.value)} />
        </div>
        <button className='btn btn-success'>Submit  </button>
      </form>
      </div>
    </div>
  )
}

export default CreateUser