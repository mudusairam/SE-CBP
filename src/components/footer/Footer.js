import React from 'react'
import './Footer.css'
import { BsInstagram } from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
function Footer() {
  return (
    <div className=' footer '>
      <div className='text-center '>
        <h2 className='text-danger text-center pt-4 fw-bold'>Disclaimer</h2>
        <p className='lead text-white info px-5'>We strictly follow the RBI directive and have set up an effective Grievance Redressal Cell to handle and address all manner of grievances.
          We always endeavour to carry out responsible lending, whereby we give just the loan which we know you will find convenient to pay back, but also recover our dues ethically. We never believe in any manner of high-handed or coercive recovery methods.
          But in case you have any complaints we will take up the matter seriously and address the issue within 5 working days.</p>
      </div>
    <div className="row px-3 py-3">
        <div className='col-sm-3'></div>
       <div className="col-sm-4"> 
        <ul className='about'>
            <NavLink to='/aboutus' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>About Us</NavLink>
            <NavLink to='/services' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>Services</NavLink>
            <NavLink to='/' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>Terms and Conditions</NavLink>
            <NavLink to='/' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>Privacy Policy</NavLink>
            <NavLink to='/contactus' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>Contact Us</NavLink>
            <NavLink to='/faqs' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className='listItems'>FAQ's</NavLink>
          </ul>
        </div>
        <div className="col-sm-4">
            <h5 className='fs-4 text-white '>Follow Us On</h5> 
        <ul className="social-icons ">
          <li><a href="#"><i className="fa"><BsInstagram/></i></a></li>
          <li><a href="#"><i className="fa"><FiTwitter/></i></a></li>
          <li><a href="#"><i className="fa"><BsLinkedin/></i></a></li>
        </ul>
        </div>
      
        <div className='col-sm-3'></div>
    </div> 
      
  </div>

  )
}

export default Footer