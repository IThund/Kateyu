import React from 'react';
import '../styles/Work.scss';
import WorkItem from '../components/Workitem';
import {WorkList} from '../helpers/WorkList';


function Work() {
  return (
    <div>
        <section className="container">
            <div className="title-wrap">
                <h3 className="title">More Works</h3>
            </div>
                <div className="Work-list page-wrapper">
                    {WorkList.map((work, index) => {
                        return <WorkItem
                        id={index} name={work.name} image={work.image} url={work.url} cat={work.cat} content={work.content} key={index}/>
                    })}
                </div>
                <div className="project-media">
                    
                </div>
        </section>
    </div>
  )
}

export default Work;