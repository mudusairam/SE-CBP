import React from 'react'
import './Faqs.css'
function Faqs() {
  return (
    <>
    
    <h2 className='display-5 text-center'>FAQ's</h2>
    <div className='w-75 d-block mx-auto border mt-3'>
      <ul className='p-5'>
        <li className='fs-5'>How can I apply for a loan?
          <br/>
          <p className='lead'>You must register if not yet registered and apply for the loan by filling the required details.</p>
        </li>
        <li className='fs-5'>By what time I will receive the loan amount?
        <br/>
        <p className='lead'>If your loan approval is verified you will receive the loan amount within 4 working days.</p>
        </li>
        <li className='fs-5'>Why was my application rejected?<br/>
        <p className='lead'>It might be due to lack of your credit score or your approval is against our policy.</p>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Faqs