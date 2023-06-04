import React from 'react'
import '../styles/About.scss';
import Experience from "./Experience";
import Propic from "../images/me.jpg";

function About() {
  return (
    <div>
        <div className="about-section container">
            <div className="card card1">
                <div className="">
                    <h2>Sooo..... you want to learn a little about me?</h2>
                </div>
            </div>
            <div className="card card2">
                <div className="img-frame">
                    <img src={Propic} alt="" />
                </div>
            </div>
            <div className="card card3">
                <h5>What I do</h5>
                    <p>
                    Loves the fast pace of the tech landscape, UX, AI, and creating meaningful products. Designing and developing websites and applications with a focus on interaction, motion and visual experience.  I love learning new things and try to learn as much from others as possible.
                    </p>
                    <h5>What I like</h5>
                    <p>
                    Here are somethings I do during the week, I workout, hike, run, swim, read, learn german, recently started to learn french and do yoga in my house🧘🏻‍♀️ 
                    <br/>
                    I really live an active lifestyle. Wanna ever chat about code, design, life or sports? Feel free to reach me.
                    </p>
            </div>
            <div className="card card4">
                <h5>Title</h5>
                <div className="skills-table">
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>Figma</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>Sketch</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>XD</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>HTML</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>CSS</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>JS</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="group">
                            <div className='skills-title'>
                                <p>React</p>
                            </div>
                            <div className="bar">
                                <div className="data"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Experience/>
    </div>
  )
}

export default About