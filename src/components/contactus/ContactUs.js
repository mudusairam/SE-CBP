import React from 'react'
import './ContactUs.css'
import { useNavigate } from 'react-router-dom'
function ContactUs() {
  let navigate=useNavigate()
  let navigateTo=()=>{
      navigate('/')
  }
  return (
    <div>
      <h2 className='display-5 text-center'>Contact Us</h2>
      <form className='form d-block mx-auto border p-4 col col-10 col-sm-6 col-lg-6 col-xl-5 border shadow mt-3'>
            <input type='text' className='form-control mt-3' placeholder='Name'></input>
            <input type='email' className='form-control mt-3' placeholder='Email'></input>
            <input type='number' className='form-control mt-3' placeholder='Mobile No.'></input>
            <textarea className='form-control mt-3' rows='5' placeholder='Message'></textarea>
            <button className='btn btn-dark d-block mx-auto mt-4 mb-4 px-4' onClick={navigateTo}>Contact</button>
        </form>
    </div>
  )
}

export default ContactUs