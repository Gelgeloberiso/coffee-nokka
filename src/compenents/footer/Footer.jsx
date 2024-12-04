import React from 'react'
import './footer.css'
import logo from './../../assets/logo/nokka-logo.png';




const Footer = () => {
  // COPYRIGHT YEAR
  const currentYear = new Date().getFullYear();

  return (

    <div id="footer" className="footer">
      <footer>

        <div className="bx"><img src={logo} alt="" /></div>
        <div className="bx">
          <div className="social-links">
            <ul>
              <li><a href=""><i className="uil uil-facebook"></i></a></li>
              <li><a href=""><i className="uil uil-instagram"></i></a></li>
              <li><a href=""><i className="uil uil-telegram"></i></a></li>
              <li><a href=""><i className="uil uil-x"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="bx">  <p> <span>Nokka Coffee </span>&copy; {currentYear}</p></div>
      </footer>
    </div>
  )
}

export default Footer