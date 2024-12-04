import React from 'react'
import './preloader.css'
import NokkaLogo from './../../assets/logo/nokka-logo.png';

const Preloader = () => {
  return (
    <div>
     <div className="preloader">
        <div className="logo-container">
            <img src={NokkaLogo} alt="" />
        </div>
        <h1>Welcome To Nokka Coffee Official Website</h1>
     </div>
    </div>
  )
}

export default Preloader
