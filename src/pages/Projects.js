import React from 'react';
import ProjectItem from '../components/Projectitem';
import "../styles/Projects.scss";
import {ProjectList} from '../helpers/ProjectList';
import { useEffect } from 'react';



function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='projects'>
        <div className="container">
            <h2>Selected Works</h2>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return <ProjectItem 
                    id={idx} name={project.name} image={project.image} cat={project.cat} key={idx}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects;