// import React from 'react'
import './Projects.css'
import Pdata from '../Data/Pdata'

import { motion } from "framer-motion"


const Projects = () => {
    return (
        <>
            <div className="project-container cont" id='project'>
                <h1 className='project-heading'>
                    My creative
                    <span> Portfolio </span>
                    Section
                </h1>
                <div className='project-cards'>
                    {
                        Pdata.map((value) => {
                            return (
                                <motion.div
                                    className="project-card"
                                    key={value._id}
                                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, type: "tween" }}
                                >
                                    <img src={value.image} alt="" />
                                    <h4>{value.name}</h4>
                                    <p>{value.desc}</p>
                                    <div className='icons'>
                                        <a href={value.gitLink}>
                                            <i className="fa-brands fa-github"></i>
                                        </a>


                                        <a href={value.link}><i className="fa-solid fa-eye"></i></a>

                                    </div>
                                </motion.div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Projects
