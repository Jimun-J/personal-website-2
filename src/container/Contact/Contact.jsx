import React, { useState } from 'react'
import './Contact.scss'
import EastIcon from '@mui/icons-material/East';
import InstagramIcon from '@mui/icons-material/Instagram';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion'

const effect = {
  y: [100, 0],
  opacity: [0, 1],
  transition: { duration: 0.4, ease: 'linear' }
}

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <motion.h1 whileInView={effect}>Ready to talk more about projects?</motion.h1>
      <motion.a className="contact_btn" whileInView={effect} target="_top" href="mailto:wkdwlans009@gmmail.com">
        Let's talk
        <span className="contact_arrow"><EastIcon style={{ fontSize: '1.8rem'}}/></span>
      </motion.a>
      <motion.div whileInView={effect} className="contact__socials">
        <a href="https://www.instagram.com/jang_jimoooon/" target="_blank" rel="noreferrer"><InstagramIcon style={{ fontSize: '1.8rem'}}/></a>
        <a href="https://jimunblog.netlify.app/" target="_blank" rel="noreferrer"><CoPresentIcon style={{ fontSize: '1.8rem'}}/></a>
        <a href="https://github.com/Jimun-J" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: '1.8rem'}}/></a>
        <a href="https://www.linkedin.com/in/jimun-jang-b1957b1b9/" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: '1.8rem'}}/></a>
      </motion.div>
    </div>
  )
}

export default Contact