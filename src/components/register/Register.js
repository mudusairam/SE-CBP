import React ,{useState} from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let [exists,setExists]=useState("")
  const submitRegister=(userObj)=>{
    axios.post('http://localhost:4900/user/register',userObj)
    .then((response)=>{
      if(response.status==201){
        setExists("")
        navigate('/')
      }
      else
      setExists(response.message)
    })
    .catch((err)=>console.log(err))
  }
  return (
  <div className='row login mt-5'>
      <h2 className='display-5 text-center'>Register</h2>
        <form className='form d-block mx-auto border p-4 col col-9 col-sm-5 col-lg-4 col-xl-3 border shadow mt-3' onSubmit={handleSubmit(submitRegister)}>
            <input type='email' className='form-control mt-3 mb-1' placeholder='Email' {...register('email',{required:true,minLength:7})}></input>
            {errors.email?.type=='required' && <h6 className='text-danger'>*Enter username</h6>}
            {errors.email?.type=='minLength' && <h6 className='text-danger'>*Minimum 7 characters are required</h6>}
            <input type='password' className='form-control mt-3 mb-1' placeholder='Password' {...register('password',{required:true,minLength:6})}></input>
            {errors.password?.type=='required' && <h6 className='text-danger'>*Enter password</h6>}
            {errors.password?.type=='minLength' && <h6 className='text-danger'>*Minimum 6 characters are required</h6>}
            <input type='number' className='form-control mt-3 mb-1' placeholder='Mobile No.' {...register('phoneno',{required:true,minLength:10})}></input>
            {errors.phoneno?.type=='required' && <h6 className='text-danger'>*Enter mobile number</h6>}
            {errors.phoneno?.type=='minLength' && <h6 className='text-danger'>*Invalid mobile number</h6>}
            <button className='btn btn-dark d-block mx-auto mt-4 mb-4 px-4' type='submit'>Register</button>
            <NavLink to='/login' className='login'>Already Registered?</NavLink>
        </form>
      </div>
  )
}

export default Register