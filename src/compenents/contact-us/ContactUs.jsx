import React from 'react';
import './contactUs.css';
import NokkaLogo from './../../assets/logo/nokka-logo.png';

const ContactUs = () => {
  return (
    <div className="container">
      <div id="contact-us" className="contact-us">
        <div className="left">

          <form action="" method="post">
            <h1>Contact Us</h1>
            <div className="input-container">

              <input type="text" name='fullname' id='fullname' placeholder='Enter your Full Name' />
            </div>

            <div className="input-container">

              <input type="email" name='email' id='email' placeholder='Enter your Email Adress' />
            </div>

            <div className="input-container">

              <input type="text" name='subject' id='subject' placeholder='Enter Subject' />
            </div>

            <div className="input-container">
              <textarea name="message" id="message" placeholder='Your Message'></textarea>
            </div>


            <a id='button' href="mailto:info@nokkacoffee.com">Send Message</a>
          </form>
        </div>
        <div className="right">
          {/* <img src={NokkaLogo} alt="" /> */}

          <ul>
            <li><h1>Get In Touch</h1></li>

            <li>
              <h3>Address</h3>
              <p><i class='bx bxs-location-plus'></i> Bule Hora Oromia, Ethiopia</p>
              <hr />
            </li>


            <li>
              <h3>Working Hours</h3>
              <p>Monday - Friday:  8:00 AM - 5:00 PM</p>
              <p>Saturday:  8:00 AM -11:30 AM</p>
              <p>Sunday:  Closed</p>
              <hr />
            </li>

            <li>
              <h3>Contact</h3>
              <p><i className="uil uil-phone"></i> +251911-33-03-31</p>
              <p><i className='bx bx-envelope'></i> info@nokkacoffee.com</p>
              <hr />
            </li>


          </ul>


        </div>
      </div>
    </div>
  )
}

export default ContactUs