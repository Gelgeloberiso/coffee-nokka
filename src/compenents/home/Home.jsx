import React from 'react';
import './home.css';
import coffeeTree from './../../assets/images/coffee-tree.png'

window.addEventListener('scroll', () => {
  const scrollableDiv = document.querySelector('.image-container');
  scrollableDiv.classList.toggle('scrolled', window.scrollY > 0);
});

const Home = () => {
  return (
    <div className="home-container">

      <section id="home" className='home'>
        <div className="left">
          <div className="hero">
            <h1 className="hero-title">Nokka Coffee</h1>
            <h3 className="subtitle">Coffee Harvesting And Exporting</h3>

            <div className="social-links">
              <ul>
                <li><a href=""> <i class='bx bxl-facebook-circle'></i></a></li>
                <li><a href=""> <i class='bx bxl-instagram-alt'></i></a></li>
                <li><a href=""> <i className="uil uil-telegram"></i></a></li>
                <li><a href=""> <i class='bx bxl-twitter'></i></a></li>
              </ul>
            </div>
            <div className="cta">
              <a href="#contact" className="button cta-button">Contact Us</a>
              <a href="#" className="button cta-button">Get Started</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={coffeeTree} alt="" />
          </div>
        </div>
      </section>
      <div className="image-container">

      </div>
    </div>
  )
}

export default Home