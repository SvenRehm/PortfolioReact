import React from "react"
import "./Section.css"
import picture from "../../images/champion-akali-headhunter-splash.jpg"

export const Section = ({ menu }) => {
   return (
      <div
         vs-anchor="view-4"
         className="mainview view-4 page section"
         id="four"
      >
         <section className="grid">
            <a
               // className="img-card"
               className={menu ? "img-card img-slideup" : "img-card"}
               href="portfolio-1.html"
            >
               <img src={picture} alt="sectionpicture" />
            </a>
            <div
               // className="img-card-text"
               className={menu ? "img-card-text img-slideup" : "img-card-text"}
            >
               <h1>
                  <a href="/">Headline</a>
               </h1>
               <h2>
                  <a className="desctiption-link" href="/">
                     Descriptionhfddfhdfg
                  </a>
               </h2>
            </div>
         </section>
      </div>
   )
}
