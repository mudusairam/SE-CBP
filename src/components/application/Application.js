import React from 'react'
import './Application.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Application() {
  let { register, handleSubmit, formState: { errors } } = useForm()
  let navigate = useNavigate()
  let [exists, setExists] = useState("")
  const submitLogin = async (userObj) => {
    await axios.post('http://localhost:4900/loan/apply-loan', userObj)
      .then((response) => {
        if (response.status == 201) {
          setExists("")
          navigate('/')
        }
        else {
          setExists(response.data.message)
        }
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='row login mt-5 mb-5'>
      <h2 className='display-5 text-center'>Application Form</h2>
      <form className='form d-block mx-auto border p-4 col col-9 col-sm-6 col-lg-5 col-xl-4 border shadow mt-3' onSubmit={handleSubmit(submitLogin)}>
        <input type='text' className='form-control mt-3 mb-1' placeholder='Username' {...register('username', { required: true })}></input>
        {errors.username?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='email' className='form-control mt-3 mb-1' placeholder='Email' {...register('email', { required: true })}></input>
        {errors.email?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='number' className='form-control mt-3 mb-1' placeholder='Mobile Number' {...register('mobileno', { required: true, minLength: 10 })}></input>
        {errors.mobileno?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <FloatingLabel controlId="floatingInput" label="Date Of Birth" className="mt-3" >
          <Form.Control type="date" {...register('dob', { required: true })} />
        </FloatingLabel>
        {errors.dob?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='number' className='form-control mt-3 mb-1' placeholder='Aadhaar Number' {...register('aadhaarno', { required: true })}></input>
        {errors.aadhaarno?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='text' className='form-control mt-3 mb-1' placeholder='PAN Card Number' {...register('pancardno', { required: true })}></input>
        {errors.pancardno?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <FloatingLabel controlId="floatingSelect" className='mt-3' label="Gender">
          <Form.Select aria-label="Floating label select example" defaultValue={"DEFAULT"} {...register('gender', { required: true })}>
            <option value="DEFAULT" disabled>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </Form.Select>
        </FloatingLabel>
        {errors.gender?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <FloatingLabel controlId="floatingSelect" className='mt-3' label="City">
          <Form.Select aria-label="Floating label select example" defaultValue={"DEFAULT"} {...register('city', { required: true })}>
            <option value="DEFAULT" disabled>Select</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
          </Form.Select>
        </FloatingLabel>
        {errors.city?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='number' className='form-control mt-3 mb-1' placeholder='Pincode' {...register('pincode', { required: true })}></input>
        {errors.pincode?.type == "required" && <h6 className='text-danger'>*required</h6>}
        <input type='number' className='form-control mt-3 mb-1' placeholder='Loan Amount' {...register('loanAmount', { required: true })}></input>
        {errors.loanAmount?.type == 'required' && <h6 className='text-danger'>*required</h6>}
        <input type='number' className='form-control mt-3 mb-1' placeholder='Monthly Income' {...register('monthlyIncome', { required: true })}></input>
        {errors.monthlyIncome?.type == 'required' && <h6 className='text-danger'>*required</h6>}
        <FloatingLabel controlId="floatingSelect" className='mt-3' label="Type of loan">
          <Form.Select aria-label="Floating label select example" defaultValue={"DEFAULT"} {...register('loanType', { required: true })}>
            <option value="DEFAULT" disabled>Select</option>
            <option value="education">Education</option>
            <option value="homeInterior">Home Interior</option>
            <option value="medical">Medical</option>
            <option value="personal">Personal</option>
            <option value="travel">Travel</option>
            <option value="wedding">Wedding</option>
          </Form.Select>
        </FloatingLabel>
        {errors.loanType?.type == 'required' && <h6 className='text-danger'>*required</h6>}
        <button className='btn btn-danger d-block mx-auto mt-5 px-4' type='submit'>Submit</button>
        {exists?.length != 0 && <h5 className='text-danger'>{exists}</h5>}
      </form>
    </div>
  )
}

export default Application