import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, url, cat }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem w-100"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="project-inner">
        <div className="thumb">
          <div key={id}
            style={{ backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover" }}
            className="bgImage"
          />
        </div>
        <div className="icon-wrap">
          <h4> {name} </h4>
          <span className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
        
        <h5> {cat} </h5>
        <a href={url}> {url}</a>
      </div>
    </div>
  );
}

export default ProjectItem;
