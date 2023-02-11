import './Header.scss'
import Typewriter from "typewriter-effect"
import { motion } from 'framer-motion'

import Astronaut from '../../assets/header_img.png'
import Resume from '../../assets/Resume.pdf'
import React from '../../assets/react.png'
import Sass from '../../assets/sass.png'
import Framer from '../../assets/framer.png'

const Header = () => {
    return (
        <div id="home" className="header">
            <div className="header__left">
                <motion.div
                    whileInView={{
                        x: [-200, 0],
                        transition: {
                            ease: "linear", duration: 0.3
                        }
                    }}
                >
                    <h1 className="header__left-title">
                        Hey there, Jimun here <span>👋</span>
                    </h1>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("Fullstack Developer")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("UI/UX Designer")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("Visual Development")
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }}
                    />
                </motion.div>
                <motion.a
                    className="header__left-resume"
                    href={Resume}
                    target="_blank" rel="noopener noreferrer"
                    whileInView={{
                        y: [100, 0],
                        opacity: [0, 1],
                        transition: {
                            ease: "linear", duration: 0.3, delay: 0.5
                        }
                    }}
                >View Resume
                </motion.a>
            </div>
            <motion.div
                className="header__right"
                whileInView={{
                    y: [0, -15, 0],
                    transition: {
                        ease: "linear", duration: 3, repeat: Infinity
                    }
                }}
            >
                <motion.div
                    className="header__right__badge-greeting"
                    whileInView={{
                        x: [-100, 0],
                        opacity: [0, 1],
                        transition: { duration: 0.5 }
                    }}
                >
                    <span>👋</span>Nice to Meet You
                </motion.div>
                <img src={Astronaut} alt="" />
                <motion.div
                    className="header__right__badge-tech"
                    whileInView={{
                        scale: [0, 1],
                        opacity: [0, 1],
                        transition: { ease: 'easeInOut' }
                    }}
                >
                    {[React, Sass, Framer].map((circle, index) => (
                        <motion.div
                            key={`circle-${index}`}
                            whileInView={{
                                x: [50, 0],
                                opacity: [0, 1],
                                transition: { delay: 0.3 * index, duration: 0.3 }
                            }}
                        >
                            <img src={circle} alt="profile_bg" />
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Header