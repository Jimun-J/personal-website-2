import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Work.scss'
import { fetchProjects } from '../../utils/api'
import Paginate from './Paginate/Paginate'

const effect = {
  y: [100, 0],
  opacity: [0, 1],
  transition: { duration: 0.4, ease: 'linear' }
}

const Work = () => {

  const [currentTab, setCurrentTab] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  console.log(projects);

  const handleClick = (tab) => {
    setCurrentTab(tab)
  }

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await fetchProjects());
    }
    getProjects();
    setFilteredProjects(projects);
  }, [])

  useEffect(() => {
    if (currentTab !== 'All') {
      const filteredProjects = projects.filter((item) => item.tags.find((tag) => tag.name === currentTab ));
      setFilteredProjects(filteredProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [currentTab])

  return (
    <div id="work" className="work">
      <motion.h3 whileInView={effect}>
        WORK
      </motion.h3>
      <motion.div
        className="work__description"
        whileInView={effect}
      >
        <h1>My Creative <span>Portfolio</span> Section</h1>
      </motion.div>
      <motion.div whileInView={effect} className="work__categories">
        {['All', 'Frontend', 'Fullstack', 'React JS'].map((tab) => (
          <div
            key={tab}
            className={currentTab === `${tab}` ? "active" : ""}
            onClick={() => handleClick(`${tab}`)}
          >
            {tab}
          </div>
        ))}
      </motion.div>
      <motion.div 
        whileInView={effect} 
        className="work__showcase">
          <Paginate posts={filteredProjects.length === 0 ? projects : filteredProjects} />
      </motion.div>
    </div>
  )
}

export default Work