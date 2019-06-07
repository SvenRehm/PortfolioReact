import React, { Component } from "react"

import "./App.css"
import { Header } from "./Components/Header/Header"
import { Landing } from "./Components/Landing/Landing"
import { Section } from "./Components/Section/Section"
import { Footer } from "./Components/Footer/Footer"
import { Menu } from "./Components/Menu/Menu"

import { Contact } from "./Components/Contact/Contact"
import ReactPageScroller from "react-page-scroller"

export class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         menu: false,
         contact: false
      }
   }

   goToPage = pageNumber => {
      this.reactPageScroller.goToPage(pageNumber)
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

   render() {
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
               goToPage={this.goToPage}
               closeMenu={this.closeMenu}
            />
            <Contact
               contact={this.state.contact}
               closeContact={this.closeContact}
            />

            {"hello from local"}
            <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
               <Landing
                  goToPage={this.goToPage}
                  menu={this.state.menu}
                  toggleContact={this.toggleContact}
               />
               <Section menu={this.state.menu} />
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
