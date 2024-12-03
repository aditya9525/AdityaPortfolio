// import React from 'react'
import './Header.css'
import Data from '../Data/Data'

import ResumeBtn from '../SubComp/ResumeBtn'


const Header = () => {
  return (
    <>
      <div className='container cont' id='/'>
        <div className="left-container">
          <h1>Hi, I am Aditya</h1>
          <span>Full Stack Developer</span>
          <p className='para'>From front-end magic to back-end logic, I deliver web solutions that are efficient and user-friendly. My passion lies in solving problems and creating impactful digital experiences. Together, we can achieve extraordinary results.</p>
          <div className='head-resume-btn'>
            <ResumeBtn />
          </div>
        </div>
        <div className="right-container">
          {Data.map((value) => {
            return (
              <div key={value}>
                <img className='right-img' src={value.cover} alt="" />
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default Header
