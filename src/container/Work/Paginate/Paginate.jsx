import React, { useEffect, useState } from 'react'
import './Paginate.scss'

import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

import { motion } from 'framer-motion';
import Card from '../Card/Card';

const Paginate = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    // change numbers of posts per page depending on window's width
    useEffect(() => {
        const updatePostsPerPage = () => {
            if (width < 769 && width > 500) {
                // tablet has four posts per page
                setPostsPerPage(4);
                setCurrentPage(1);
            } else if (width < 501) {
                // mobile has two posts per page
                setPostsPerPage(2);
                setCurrentPage(1);
            } else {
                // desktop has six posts per page
                setPostsPerPage(6);
                setCurrentPage(1);
            }
        }
        updatePostsPerPage();
    }, [width]);

    // get posts for a specified page 
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

    // set page
    const paginate = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <motion.div
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="projects-container"
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 1, delayChildren: 1 }}
            >
                {currentPosts.map((post, index) => (<Card post={post} key={index}>{post.name}</Card>))}
            </motion.div>
            <Stack sx={{ mt: { lg: '70px', xs: '60px' } }} alignItems="center">
                {posts.length > 3 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(posts.length / postsPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </motion.div>
    )
}

export default Paginate