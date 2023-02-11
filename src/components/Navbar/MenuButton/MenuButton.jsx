import React from 'react'
import { motion } from 'framer-motion'

const MenuButton = ({ variant_one, variant_two, path_one, path_two, handleClick }) => {
    return (
        <button onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                    {...variant_one.closed}
                    animate={path_one}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                />
                <motion.path
                    {...variant_two.closed}
                    animate={path_two}
                    transition={{ duration: 0.2 }}
                    stroke="#000000"
                />
            </svg>
        </button>
    )
}

export default MenuButton