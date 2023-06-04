import React from "react";
import { useNavigate } from "react-router-dom";

function WorkItem({ image, name, id, url, cat }) {
  const navigate = useNavigate();
  return (
    <div className="worklist-item">
      <div className="worklist-title">
        <a href={url} target="_blank" rel={name}>
          <div className="image-container">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="bgImage"
            />
          </div>
          <h4> {name} </h4>
          <span className="small-title">{cat}</span>
        </a>
      </div>
    </div>
  );
}

export default WorkItem;
