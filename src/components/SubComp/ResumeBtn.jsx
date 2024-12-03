// import React from 'react'
import './ResumeBtn.css'

const ResumeBtn = () => {
    return (
        <>
            <a href='/resume.pdf' download="AdityaKumar_Resume.pdf" className="resume">
                Resume
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </>
    )
}

export default ResumeBtn
