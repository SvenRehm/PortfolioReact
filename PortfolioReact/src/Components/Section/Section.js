// import React from "react"
import React, { Component } from "react"
import "./Section.css"
import picture from "../../images/champion-akali-headhunter-splash.jpg"

export class Sections extends Component {
   render() {
      const { menu, headline, paragraph1 } = this.props

      const { skills = [] } = this.props

      const allskills = skills.map((item, key) => <li key={3}>{item}</li>)
      return (
         <div>
            <div
               vs-anchor="view-4"
               className="mainview view-4 page section"
               id="four"
            >
               <div className="grid">
                  <div
                     // className="img-card"
                     className={menu ? "img-card img-slideup" : "img-card"}
                     href="/"
                     onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true })
                     }}
                  >
                     <button className="viewdemo">
                        <a href="/">View Demo</a>
                     </button>
                     <button className="viewcode">View Code</button>
                     <img alt={"projectimage"} src={picture}></img>
                     <div className="content "></div>
                     <h4>Skills Used</h4>
                     <ul>
                        {/* <li>HTML/CSS</li>
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>POSGRESQL</li> */}
                        {allskills}
                     </ul>
                     <div
                        className={
                           menu ? "img-card-text img-slideup" : "img-card-text"
                        }
                     >
                        <h1>{headline}</h1>
                        <h3 className="desctiption-link">
                           Something desriptive
                        </h3>
                        <h2>What I have Learned</h2>
                        <p>{paragraph1}</p>
                        <p>
                           Lorem ipsum dolor sit amet, consetetur sadipscing
                           elitr, sed diam nonumy eirmod tempor invidunt ut
                           labore et dolore magna aliquyam erat, sed diam
                           voluptua. At vero eos et accusam et justo duo dolores
                           et ea rebum. Stet clita kasd gubergren, no sea
                           takimata sanctus est Lorem ipsum dolor sit amet.
                           Lorem ipsum dolor sit amet, consetetur sadipscing
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
