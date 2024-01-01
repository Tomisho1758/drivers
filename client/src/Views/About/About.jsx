import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"

function About() {
  return (
    <div>
         <div className="about">
            <div className="aboutboton">
                <Link to={"/"}>
                     <button>Home</button>
                </Link>
            </div>
            <div className="aboutname">
                <h2>Tomas Moukarzel</h2>
            </div>
            <div className="aboutgit">
                <h3>Github: <a href="https://github.com/Tomillo1758"> Tomillo1758</a></h3>
            </div>
            <div className="aboutlink">
                <h3>Linkledin: </h3><a href="linkedin.com/in/tomas-elias-moukarzel-924a29144"> Tomas-Moukarzel</a>
            </div>
        </div>
    </div>
  )
}

export default About