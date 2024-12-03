// import React from 'react'
import './Skills.css'
import Sdata from "../Data/Sdata"

const Skills = () => {
    return (
        <div className="skills cont" id='skill'>
            <h1 className='skill-heading'>
                Skills & <span> Experiences</span>
            </h1>
            <div className="sub-skills">
                <div className="skills-containers">
                    {
                        Sdata.map((value) => {
                            return (
                                <div key={value} className='icon-text'>
                                    <div className="skills-icons">
                                        <img src={value.image} alt="" />
                                    </div>
                                    <div className='text'>{value.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="exper">
                    <img src="/Images/corporate.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Skills
