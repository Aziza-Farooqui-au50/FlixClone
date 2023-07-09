import React from 'react'
import {Link} from 'react-router-dom'
import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      <h1 className='headingB'>Our Team</h1>
       <div className="mainB">

     
      <div class="profile-card">
        <div class="image">
        <img src="" alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>Aziza Farooqui</h2>
        <span>MERN Stack Developer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>MONGO DB</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE JS</li>
              <li>JAVA</li>
              <li>JAVASCRIPT</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src="" alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>Rizwan Mohammad</h2>
        <span>MERN Stack Developer </span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-hackerrank"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>MONGO DB</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE JS</li>
              <li>JAVA</li>
              <li>JAVASCRIPT</li>
            </ul>
            </div>
        </div>
        </div>
      </section>
      
      </>
      );
}

export default Developers