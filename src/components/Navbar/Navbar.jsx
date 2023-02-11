import { useState, useEffect } from 'react'

import './Navbar.scss'
import { motion, useAnimation } from "framer-motion"
import MenuButton from './MenuButton/MenuButton'
import MobileNavbar from './MobileNavbar/MobileNavbar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [scroll, setScroll] = useState(window.scrollY);
    const [background, setBackground] = useState({});

    const variant_one = {
        open: { d: "M3.06061 2.99999L21.0606 21" },
        closed: { d: "M0 9.5L24 9.5" }
    };

    const variant_two = {
        open: { d: "M3.00006 21.0607L21 3.06064" },
        moving: { d: "M0 14.5L24 14.5" },
        closed: { d: "M0 14.5L15 14.5" }
    }

    const path_one = useAnimation();
    const path_two = useAnimation();

    useEffect(() => {
        const updateWindowDimensions = () => {
            const scroll = window.scrollY;
            setScroll(scroll);
        }
        window.addEventListener('scroll', updateWindowDimensions);
        return () => window.removeEventListener('scroll', updateWindowDimensions);
    }, [])

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    useEffect(() => {
        if (width > 900) {
            setIsOpen(false);
        }
    }, [width]);

    useEffect(() => {
        if (scroll > 700) {
            setBackground({
                backgroundColor: 'white',
                borderBottom: '1px solid rgba(160, 160, 160, 0.18)'
            }) 
        } else {
            setBackground({});
        }
    }, [scroll])


    const handleClick = async () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            await path_one.start(variant_two.moving);
            path_one.start(variant_one.open);
            path_two.start(variant_two.open);
        } else {
            path_one.start(variant_one.closed);
            await path_two.start(variant_two.moving);
            path_two.start(variant_two.closed);
        }
    };

    return (
        <div className="navbar" style={background}>
            <div className="navbar__logo">
                <a href="#home">Jimun.Jang</a>
            </div>
            <div className="navbar__navigation">
                <ul>
                    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                        <motion.li
                            key={item}
                            whileHover={{
                                y: -4,
                                transition: { ease: "easeOut", duration: 0.4 }
                            }}
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.2 * index }}
                        >
                            <a href={`#${item}`}>{item}</a>
                            <div />
                        </motion.li>
                    ))}
                    <MenuButton variant_one={variant_one} variant_two={variant_two} path_one={path_one} path_two={path_two} handleClick={handleClick} />
                </ul>
            </div>
            <MobileNavbar isOpen={isOpen} handleClick={handleClick} />
        </div>
    )
}

export default Navbar