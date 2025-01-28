import React from 'react'
import sktech from '../Source/SKTech.png'
const Header = () => {
  return (
<>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
             
          <img src={sktech} alt="Logo" className="d-inline-block align-top"  style={{ width: '20px', height: '30px', marginRight: '10px' }} />

    SK Tech</a>

    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <p className='text-center mb-0'>Employee Management System</p>
    </div>
  </div>
</nav> 


        </header>
</>
)
}

export default Header