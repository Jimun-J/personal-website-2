import React from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'
import Card from './Card/Card'
import frontend_img from '../../assets/frontend.png'
import backend_img from '../../assets/backend.png'
import database_img from '../../assets/database.png'
import github from '../../assets/github.png'

const effect = {
  y: [100, 0],
  opacity: [0, 1],
  transition: { duration: 0.4, ease: 'linear' }
}

const skills = [
  {
    title: 'Frontend Development',
    description: 'Responsible for making sure that code works across all major browsers including Chrome, Firefox, and Safari and on multiple devices such as mobile phones or tablets.',
    img: frontend_img
  },
  {
    title: 'Backend Development',
    description: 'Responsible for building out the server-side components of web applications to ensure they function properly',
    img: backend_img
  },
  {
    title: 'Database Management',
    description: 'Responsible for for efficient storage of large amounts of data that can be accessed quickly and easily by authorized users',
    img: database_img
  },
  {
    title: 'Version Control',
    description: 'Responsible for keeping records of changes to a file or set of files over time so that you can recall specific versions later',
    img: github
  }
]

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <motion.h3 whileInView={effect}>
        SKILLS
      </motion.h3>
      <motion.div
        className="skills__description"
        whileInView={effect}
      >
        <motion.h1
          whileInView={effect}
        >
          Developer who works on both the frontend and backend of an application
        </motion.h1>
        <motion.p
          whileInView={effect}
        >
          <span>|</span>
          <div>
            Possesses strong frontend and backend skills. <br />
            HTML, CSS, JavaScript, React, Node.js, MongoDB, Git ...
          </div>
        </motion.p>
      </motion.div>
      <motion.div
        className="skills__card__container"
        whileInView={{
          y: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.4, ease: 'linear', delayChildren: 0.5 }
        }}
      >
        {
          skills.map((item) => (
            <Card title={item.title} description={item.description} img={item.img}></Card>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Skills