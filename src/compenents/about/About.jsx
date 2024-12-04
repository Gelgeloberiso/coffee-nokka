import React from 'react'
import './about.css';
import CoffeBean from './../../assets/icons/coffee-bean.png';
import NokkaCoffeeDrying from './../../assets/images/nokka-coffee-drying.png'
import Mission from './../../assets/icons/mission.png';
import Vision from './../../assets/icons/vision.png';
import Goal from './../../assets/icons/goal.png';
import oromiaIrrigation from './../../assets/icons/oromia-irrigation.png';
import oromiaAgriculture from './../../assets/icons/oromia-agricultural-office.png';
import ECTA from './../../assets/logo/buna-ina-shay.jpg';
import MoA from './../../assets/logo/MoA.jpg';
import ECEA from './../../assets/logo/ethiopian-coffee-association.png';


// TEAMS 
import CEO from './../../assets/images/photo_2024-11-12_10-14-50.jpg';
import manager from './../../assets/images/user-01.png';

//partner
import ECX from './../../assets/icons/ecx.png'

//SOCIALL RESPONISIBILITY

import coffeePlantation from './../../assets/images/nokka-coffee-planation-training-01.png';
import seedProvision from './../../assets/images/nokka-seed-provision-01.png'
const About = () => {
  return (
    <div className="container">
      <div id="about" className='about'>
        <div className="about-section-1" id="about-section-1">
          <div className="left">
            <div className="card">
              <div className="card-image">
                <img src={NokkaCoffeeDrying} alt="" srcset="" />
              </div>
              <div className="card-body">
                <div className="card-title"><h1 className="title">Nokka Coffee</h1></div>
                <div className="card-social-links">
                  <ul>
                    <li><a href=""> <i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href=""> <i class='bx bxl-instagram-alt'></i></a></li>
                    <li><a href=""> <i class='bx bxl-telegram'></i></a></li>
                    <li><a href=""> <i class='bx bxl-twitter'></i></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>


          <div className="right">
            <h3 className="about-subtitle">About Us</h3>
            <h1 className="about-header">Let's Say about Us</h1>
            <div className="about-icon"><img src={CoffeBean} alt="" srcset="" /></div>
            <div className="about-body">
              <p className="paragraph">Nokka Coffeeis a family-owned business inspired by the legacy of our father, Nokka Tenko, a visionary coffee farmer and successful entrepreneur. Building on his footsteps, we have expanded our operations to produce high-quality coffee on our own farmland, as well as purchasing beans from local farmers in the region., <br /> <br />

                Our coffee is carefully processed at our state-of-the-art washing and dry processing facilities located in Bardaye Chabiti and Haro, within the West Guji zone of Southern Oromia. Committed to quality and sustainability, Nokka Coffee strives to elevate the rich coffee heritage of our community while delivering exceptional products to coffee lovers around the world.</p>
            </div>
          </div>
        </div>
        <div className="about-section-2">
          <div className="top">
            <h3 className="about-subtitle">Who We Are</h3>
            <h1 className="about-header">The foundation of our business is our core principles.</h1>
            <div className="about-icon"><img src={CoffeBean} alt="" srcset="" /></div>
          </div>
          <div className="vision-mission-goal">
            <div className="box">
              <div className="icon"><img src={Vision} alt="" srcset="" /></div>
              <h1 className="title">Our Vision</h1>
              <p className="description">
                To be the Pioneer in tying the industry's
                and technology together with quality among coffee exporters and
                producers while taking environmental responsibility.
              </p>
            </div>

            <div className="box">
              <div className="icon"><img src={Mission} alt="" srcset="" /></div>
              <h1 className="title">Our Mission</h1>
              <p className="description">
                Provide high-quality, organic, and traceable
                Ethiopian coffee beans along with effective,
                client-focused, amiable, and competent services.
              </p>
            </div>

            <div className="box">
              <div className="icon"><img src={Goal} alt="" srcset="" /></div>
              <h1 className="title">Our Goal</h1>
              <p className="description">
                To become one of the nation's most competent
                and to export coffee of superior quality in
                order to get international recognition.
              </p>
            </div>

          </div>
        </div>


        <div className="section-4">
          <div className="left">
            <div className="image-box"> <img src={NokkaCoffeeDrying} alt="" /></div>
            <div className="box-body">
              <h1>Why You Choose Nokka Coffee?</h1>
            </div>
          </div>
          <div className="right">
            <div className="body-box">
              <ul>
                <li className='li'>We are truly fortunate to have formed excellent partnerships with many of our clients. And we’ve formed more than just working relationships with them; we have formed true friendships.</li>
                <li className='li'>We are a private Limited of coffee companies, producers, exporters of quality coffee from Ethiopia. The ones that make up our Company are certified coffee companies, with products authorized for export.</li>

                <li className='li'>
                  Our buyers can trust that they are buying only a 100% Arabica Ethiopia coffee and the highest quality excellent supreme and specialty, direct from Ethiopia to your destination country
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="social-repo">
          <div className="top">
            <h3 className="about-subtitle">Our Social Responsibility</h3>
            <h1 className="about-header">Let say About Out Company's Social  reponsibility.</h1>
            <div className="about-icon"><img src={CoffeBean} alt="" srcset="" /></div>
          </div>
          <div className="lower">
            <div className="respo-container">
              <div className="respo-img-container">
                <img src={coffeePlantation} alt="" />
                <div className="icon-container"><img src={CoffeBean} alt="" /></div>
              </div>
              <div className="respo-body">
                <h2>Coffee Plantation Training</h2>
                <h4>Bule Hora</h4>
                <p>Empowering Local Farmers through Coffee Plantation Training

                  As part of our commitment to corporate social responsibility, we recently conducted a comprehensive training session for local farmers in Bardaye village, Bule Hora woreda, West Guji zone. This initiative, organized by the Shibbiru Nokka Dry Coffee Industry, aimed to enhance the skills and knowledge of farmers in key areas such as soil management, pest control, irrigation techniques, and efficient harvesting methods.</p>
                <button>Learn More</button>
              </div>
            </div>

            <div className="respo-container">
              <div className="respo-img-container">
                <img src={seedProvision} alt="" />
                <div className="icon-container"><img src={CoffeBean} alt="" /></div>
              </div>
              <div className="respo-body">
                <h2>Coffee Seed Provision</h2>
                <h4>Bule Hora</h4>
                <p> Shibbiru Nokka Dry Coffee Industry supported local agriculture by distributing free coffee seedlings to farmers in Bardaye village, Bule Hora woreda. This initiative followed a training session on best practices for planting and nurturing coffee seedlings.

                  Farmers learned optimal planting techniques, soil preparation, irrigation methods, and pest management strategies. Following the training, they received high-quality seedlings, enhancing their ability to improve productivity and sustainability in coffee farming.

                  The initiative was met with enthusiasm, as farmers expressed gratitude for the support, which will help boost their livelihoods. Shibbiru Nokka is committed to empowering local farmers and fostering sustainable agricultural practices, contributing to a thriving coffee community in West Guji zone.</p>
                <button>Learn More</button>
              </div>
            </div>

          </div>
        </div>

        <div className="about-section-3 about-section-2">
          <div className="top">
            <h3 className="about-subtitle">Our Parneter</h3>
            <h1 className="about-header">Our Partneriship is beyond just partnersip.</h1>
            <div className="about-icon"><img src={CoffeBean} alt="" srcset="" /></div>
          </div>
          <div className="partnership">

            <div className="box">
              <div className="partner-logo"><img src={oromiaAgriculture} alt="" /></div>
              <h3 className="partner-name"><a href="https://oromiabureauofagriculture.org/">Oromia Agricultural</a></h3>
            </div>

            <div className="box">
              <div className="partner-logo"><img src={ECX} alt="" /></div>
              <h3 className="partner-name"><a href="https://www.ecx.com.et/">ECX</a></h3>
            </div>


            <div className="box">
              <div className="partner-logo"><img src={MoA} alt="" /></div>
              <h3 className="partner-name"><a href="https://www.moa.gov.et/">FDRE Ministry of Agriculture</a></h3>
            </div>

            <div className="box">
              <div className="partner-logo"><img src={oromiaIrrigation} alt="" /></div>
              <h3 className="partner-name"><a href="https://www.oipdb.gov.et/">Oromia Irrigation</a></h3>
            </div>

            <div className="box">
              <div className="partner-logo"><img src={ECTA} alt="" /></div>
              <h3 className="partner-name"><a href="https://ethiocta.gov.et/">Ethiopia Coffee And Teach Authority</a></h3>
            </div>

            <div className="box">
              <div className="partner-logo"><img src={ECEA} alt="" /></div>
              <h3 className="partner-name"><a href="https://ethiopiancoffeeassociation.org/">Ethiopian Coffee Association</a></h3>
            </div>
          </div>




        </div>

        <div className="about-section-5">
          <div className="top">
            <h3 className="about-subtitle">Our Team</h3>
            <h1 className="about-header">Lets meet our Teams.</h1>
            <div className="about-icon"><img src={CoffeBean} alt="" srcset="" /></div>
          </div>
          <div className="team-container">

            <div className="card">
              <div className="photo"><img src={CEO} alt="" /></div>
              <div className="team-info">
                <div className="team-name-role">
                  <h3>Shibiru Nokka</h3>
                  <p className="role">CEO and Founder of Nokka Coffee</p>
                </div>
                <div className="team-social-link">
                  <ul>
                    <li><a href=""> <i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href=""> <i class='bx bxl-instagram-alt'></i></a></li>
                    <li><a href=""> <i class='bx bxl-telegram'></i></a></li>
                    <li><a href=""> <i class='bx bxl-twitter'></i></a></li>
                  </ul>
                </div>

              </div>
            </div>


            <div className="card">
              <div className="photo"><img src={manager} alt="" /></div>
              <div className="team-info">
                <div className="team-name-role">
                  <h3>Geleta Tesema</h3>
                  <p className="role">Export Manager</p>
                </div>
                <div className="team-social-link">
                  <ul>
                    <li><a href=""> <i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href=""> <i class='bx bxl-instagram-alt'></i></a></li>
                    <li><a href=""> <i class='bx bxl-telegram'></i></a></li>
                    <li><a href=""> <i class='bx bxl-twitter'></i></a></li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}

export default About