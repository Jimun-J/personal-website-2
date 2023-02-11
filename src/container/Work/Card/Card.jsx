import React from 'react'
import './Card.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={post.thumbnail.url} alt="" />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
          className="card__img-hover"
        >
          {
            post.urlLink === null ? <></> :
              <a href={post.urlLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                >
                  <AiFillEye />
                </motion.div>
              </a>
          }

          {
            post.githubLink === null ? <></> :
              <a href={post.githubLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                >
                  <AiFillGithub />
                </motion.div>
              </a>
          }


        </motion.div>
      </div>


      <div className="card__content">
        <h4>{post.name}</h4>
      </div>

    </div>
  )
}

export default Card