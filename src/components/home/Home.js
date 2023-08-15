import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 p-5'>
      <div className='col text-center mt-5 p-3 '><h2 className='display-5 content fw-bold'>CreditBlitz</h2>
      <br></br>
      <h5 className='need '>Your need is our need</h5>
      <NavLink to='/apply'><button className='btn btn-dark mt-4 px-4 py-2 fs-5'>Apply </button></NavLink>
      </div>
      <div className='col p-3'><Image src="https://s31898.pcdn.co/wp-content/uploads/2022/06/All-about-home-loans-for-resale-flats-FB-1200x700-compressed.jpg" className='loan' fluid /></div>
    </div>
  )
}

export default Home