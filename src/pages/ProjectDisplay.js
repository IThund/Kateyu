import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.scss";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  //Render the page in the top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div className="project">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content-inner">
                <div className="img-container">
                  <div className="img-frame">
                    <img src={project.image} alt="" key={id}  />
                  </div>
                </div>
                <h4> {project.cat}</h4>
              <h2> {project.name}</h2>
             
          </div>
          
          <div className="content">
            <p>{project.content}</p>
            <span className="link">
              <a href={project.url} key={id} target="_blank" > {project.name}  </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
