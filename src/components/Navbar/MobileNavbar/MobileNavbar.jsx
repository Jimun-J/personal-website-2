import React from 'react'
import { motion } from "framer-motion"

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, type: 'spring' },
        display: 'block'
    },
    close: {
        y: -320,
        opacity: 0,
        transition: {
            duration: 0.3
        },
        transitionEnd: {
            display: "none"
        }
    }
}

const MobileNavbar = ({ isOpen, handleClick }) => {
    return (
        <motion.div
            className={isOpen ? "navbar__navigation-mobile active" : "navbar__navigation-mobile"}
            animate={isOpen ? "open" : "close"}
            variants={variants}
        >
            <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item} onClick={handleClick}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default MobileNavbar