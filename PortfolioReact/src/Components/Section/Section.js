// import React from "react"
import React, { Component } from "react"
import "./Section.css"
import picture from "../../images/champion-akali-headhunter-splash.jpg"
import image from "../../images/xan-griffin-420173-unsplash.jpg"
import image2 from "../../images/animelist.png"
import Lightbox from "react-image-lightbox"

const images = [
   image,
   image2,
   "//placekitten.com/800/1200",
   "//placekitten.com/1500/1500"
]

export class Sections extends Component {
   constructor(props) {
      super(props)

      this.state = {
         photoIndex: 0,
         isOpen: false
      }
   }

   render() {
      const { menu } = this.props
      const { photoIndex, isOpen } = this.state
      return (
         <div>
            <div
               vs-anchor="view-4"
               className="mainview view-4 page section"
               id="four"
            >
               <div className="grid">
                  <a
                     // className="img-card"
                     className={menu ? "img-card img-slideup" : "img-card"}
                     href="/"
                     onClick={event => {
                        event.preventDefault()
                        this.setState({ isOpen: true })
                     }}
                  >
                     <img src={picture} alt="sectionpicture" />
                  </a>
                  <div
                     // className="img-card-text"
                     className={
                        menu ? "img-card-text img-slideup" : "img-card-text"
                     }
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
               </div>
            </div>

            {isOpen && (
               <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                     images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                     this.setState({
                        photoIndex:
                           (photoIndex + images.length - 1) % images.length
                     })
                  }
                  onMoveNextRequest={() =>
                     this.setState({
                        photoIndex: (photoIndex + 1) % images.length
                     })
                  }
               />
            )}
         </div>
      )
   }
}
