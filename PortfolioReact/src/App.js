import React, { Component } from "react"

import "./App.css"
import { Header } from "./Components/Header/Header"
import { Landing } from "./Components/Landing/Landing"
import { Sections } from "./Components/Section/Section"
import { Footer } from "./Components/Footer/Footer"
import { Menu } from "./Components/Menu/Menu"
import { Contact } from "./Components/Contact/Contact"
import "react-image-lightbox/style.css"
import { firstSection } from "./content"
import { secondSection } from "./content"

import ReactPageScroller from "react-page-scroller"

export class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         menu: false,
         contact: false
      }
   }

   toggleMenu = () => {
      const currentState = this.state.menu
      this.setState({ menu: !currentState })
   }

   toggleContact = () => {
      const currentState = this.state.contact
      this.setState({ contact: !currentState, menu: false })
   }
   closeContact = () => {
      this.setState({ contact: false, menu: false })
   }
   closeMenu = () => {
      this.setState({ menu: false })
   }

   goToPage = pageNumber => {
      this.reactPageScroller.goToPage(pageNumber)
   }

   render() {
      let options = {
         animationTimer: 900
      }

      return (
         <div className={this.state.contact ? "#scroll blur" : "#scroll"}>
            <div className="bg-lines hidden">
               <svg>
                  <line x1="20%" y1="100%" x2="80%" y2="0" />
                  <line x1="80%" y1="100%" x2="20%" y2="0" />
               </svg>
            </div>
            <Header menu={this.state.menu} toggleMenu={this.toggleMenu} />
            <Menu
               menu={this.state.menu}
               toggleContact={this.toggleContact}
               closeMenu={this.closeMenu}
               goToPage={this.goToPage}
            />
            <Contact
               contact={this.state.contact}
               closeContact={this.closeContact}
            />

            <ReactPageScroller
               {...options}
               ref={c => (this.reactPageScroller = c)}
            >
               <Landing
                  menu={this.state.menu}
                  toggleContact={this.toggleContact}
                  changePage={this.changePage}
                  goToPage={this.goToPage}
               />

               <Sections
                  menu={this.state.menu}
                  headline={firstSection.headline}
                  description={firstSection.description}
                  bullets={firstSection.bullets}
                  skills={firstSection.skills}
                  demolink={firstSection.demolink}
                  codelink={firstSection.codelink}
               />

               <Sections menu={this.state.menu} skills={secondSection.skills} />

               <Footer
                  menu={this.state.menu}
                  toggleContact={this.toggleContact}
                  goToPage={this.goToPage}
               />
            </ReactPageScroller>
         </div>
      )
   }
}
