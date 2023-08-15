import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
function Login() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let [IU,setIU]=useState("")
  let [IP,setIP]=useState("")
  const submitLogin=(userObj)=>{
    axios.post('http://localhost:4900/user/login',userObj)
    .then((response)=>{
      if(response.status==201)
      {
        localStorage.setItem("token",response.data.token)
        navigate('/')
      }
      else{
        if(response.data.message=='*Invalid username')
        {
        setIU(response.data.message)
        setIP("")
        }
        else
        {
        setIP(response.data.message)
        setIU("")
        }
      }
    })
  }
  return (
    <div>
        <div className='row login mt-5'>
          
        <h2 className='display-5 text-center'>Login</h2>
        <form className='form d-block mx-auto border p-4 col col-9 col-sm-5 col-lg-4 col-xl-3 border shadow mt-3' onSubmit={handleSubmit(submitLogin)}>
            <input type='text' className='form-control mt-3 mb-1' placeholder='Username' {...register('email',{required:true})}></input>
            <h6 className='text-danger ms-2'>{IU}</h6>
            <input type='password' className='form-control mt-3 mb-1' placeholder='Password' {...register('password',{required:true})}></input>
            <h6 className='text-danger ms-2'>{IP}</h6>
            <button className='btn btn-dark d-block mx-auto mt-4 mb-4 px-4' type='submit'>Login</button>
            <NavLink to='/register' className='register' >Register</NavLink>
        </form>
        </div>
    </div>
  )
}

export default Login