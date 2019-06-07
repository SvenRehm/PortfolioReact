import React, { Component } from "react"

import "./App.css"
import { Header } from "./Components/Header/Header"
import { Landing } from "./Components/Landing/Landing"
import { Sections } from "./Components/Section/Section"
import { Footer } from "./Components/Footer/Footer"
import { Menu } from "./Components/Menu/Menu"
import { Contact } from "./Components/Contact/Contact"
import { ScrollPage, Section } from "react-scrollpage"

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
   changePage = number => {
      window.turnTo(number)
   }

   render() {
      const options = {
         curPage: 1, // inital page number, most 1
         totalPage: 3, // totoal page number
         // callback function when page changed with curPage specifed
         delay: 0 // delay between two scoll animation
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
               changePage={this.changePage}
            />
            <Contact
               contact={this.state.contact}
               closeContact={this.closeContact}
            />

            <ScrollPage {...options}>
               <Section>
                  <Landing
                     menu={this.state.menu}
                     toggleContact={this.toggleContact}
                     changePage={this.changePage}
                  />
               </Section>
               <Section>
                  <Sections menu={this.state.menu} />
               </Section>
               <Section>
                  <Footer
                     menu={this.state.menu}
                     toggleContact={this.toggleContact}
                     changePage={this.changePage}
                  />
               </Section>
            </ScrollPage>
         </div>
      )
   }
}
