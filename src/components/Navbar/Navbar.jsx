import { Link } from 'react-scroll';
import ResumeBtn from '../SubComp/ResumeBtn'
import './Navbar.css'
import { useState } from 'react';
import { motion } from 'framer-motion'


const Navbar = () => {

    const [toggol, setToggol] = useState(false);
    const [active, setActive] = useState(false);

    const toggolHand = () => {
        setToggol(!toggol)
        // alert(setToggol)
    }


    return (
        <>
            <nav>
                <div className="navbar cont">
                    <h1 className='logo'>
                        <Link to="/" smooth={true} duration={500} className='logoa'>Aditya</Link>
                    </h1>
                    <div className="nav-items">
                        <ul>
                            <li>
                                <Link to="/" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link to="about1" spy={true} smooth={true} offset={-60} duration={500}>About</Link>
                            </li>
                            <li>
                                <Link to="project" spy={true} smooth={true} offset={-60} duration={500}>Project</Link>
                            </li>
                            <li>
                                <Link to="skill" spy={true} smooth={true} offset={-60} duration={500}>Skill</Link>
                            </li>
                            <li>
                                <Link to="footer1" spy={true} smooth={true} offset={-160} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <ResumeBtn />

                    <div className="hambrg" onClick={toggolHand}>
                        <i className="fa-solid fa-bars hambrg"></i>
                    </div>





                    <div className={active ? '' : 'action'}>

                        {toggol && (
                            <motion.ul
                                whileInView={{ x: [300, 0] }}
                                transition={{ duration: 0.5, ease: "linear" }}
                            >

                                <div className="xmark" onClick={toggolHand}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <li>
                                    <Link className='anch' onClick={toggolHand} to="/" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
                                </li>
                                <li>
                                    <Link className='anch' onClick={toggolHand} to="about1" spy={true} smooth={true} offset={-60} duration={500}>About</Link>
                                </li>
                                <li>
                                    <Link className='anch' onClick={toggolHand} to="project" spy={true} smooth={true} offset={-60} duration={500}>Project</Link>
                                </li>
                                <li>
                                    <Link className='anch' onClick={toggolHand} to="skill" spy={true} smooth={true} offset={-60} duration={500}>Skill</Link>
                                </li>
                                <li>
                                    <Link className='anch' onClick={toggolHand} to="footer1" spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
                                </li>


                                <div className="icons-sol">
                                    <a href="mailto:adityastar432@gmail.com">
                                        <i className="fa-brands fa-google gradient-text"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/adityak432/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/aditya9525" target='_blank' rel='noopener noreferrer'>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </motion.ul>

                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
