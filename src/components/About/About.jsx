import Adata from "../Data/Adata"
import { motion } from "framer-motion"
import './About.css'

const About = () => {
    return (
        <div className='about cont' id="about1">
            <h1>A <span>Smart Developer</span>  is the <br /> backbone of <span>Smart Business</span></h1>
            <div className='about-box'>
                {
                    Adata.map((value) => {
                        return (

                            <motion.div
                                className="boxs"
                                key={value._id}
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, type: "tween" }}
                            >
                                <img src={value.image} alt="" />
                                <h2>{value.name}</h2>
                                <p>{value.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default About
