import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import mobile from '../../assets/mobile.jpg'
import person from '../../assets/person.jpg'
import team from '../../assets/team.jpg'
import coding from '../../assets/coding.jpg'

const effect = {
  y: [100, 0],
  opacity: [0, 1],
  transition: { duration: 0.4, ease: 'linear' }
}

const About = () => {
  return (
    <div id="about" className="about">
      <motion.h3 whileInView={effect}>
        ABOUT ME
      </motion.h3>
      <motion.div
        className="about__description"
        whileInView={effect}
      >
        <h1>Developer focused on software engineering and web development.</h1>
        <p>
          Possesses strong problem solving skills and an aptitude for quickly learning new technologies.
          Highly organized with excellent communication skills and interpersonal
        </p>
      </motion.div>
      <div className="about__gallery">
        {[coding, team, person, mobile].map((item, index) => (
          <motion.div
            className={`about__gallery-item${index}`}
            whileInView={effect}
            key={item}
          >
            <img src={item} alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About