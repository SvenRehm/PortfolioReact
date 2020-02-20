import React, { Component } from "react"

import "./App.css"
import { Header } from "./Components/Header/Header"
import { Landing } from "./Components/Landing/Landing"
import { Sections } from "./Components/Section/Section"
import { Footer } from "./Components/Footer/Footer"
import { Menu } from "./Components/Menu/Menu"
import { Contact } from "./Components/Contact/Contact"
import { ScrollPage, Section } from "react-scrollpage"
import "react-image-lightbox/style.css"

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
         totalPage: 4, // totoal page number
         // callback function when page changed with curPage specifed
         delay: 0 // delay between two scoll animation
      }

      const firstSection = {
         demolink: "https://myanimelist.herokuapp.com",
         codelink: "https://github.com/SvenRehm/Anime-Api-Practice-Project",
         headline: "MyAnimeList",
         description:
            "Animelibrary in der man eine liste der Animes die man ansehen will erstellen kann",
         paragraph1: "Something Really good written",
         bullets: [
            "Focus und Ziel der Web App war es Redux zu lernen und das verständniss von React zu vertiefen",
            "Entwurf des UX/UI Designs in AdobeXD und Implementierung mit React/ReactRouter/Redux",
            "Benutzte Kitsu Api Datenbank und diese mit Postman getestet",
            "Entwicklung des Backends(Node) für Account erstellung mit Passwort-Hashen , Gestaltete Datenbank in PostgreSQL wo weitere information zu der watchlist gespeichert werden",
            "Implementierte JSON web token für Authentifikation das im Lokalen Speicher gespeichert wird",
            "Hosting des Frontends und Backends auf Heroku durchgeführt"
         ],

         skills: ["HTML/CSS", "REACT", "REDUX", "NODE", "POSTGRESSQL"]
      }

      const secondSection = {
         headline: "MyAnimeList",
         paragraph1: "Something Really good written",
         skills: ["HTML/CSS", "REACT", "REDUX", "POSTGRESSQL"]
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
                  <Sections
                     menu={this.state.menu}
                     headline={firstSection.headline}
                     paragraph1={firstSection.paragraph1}
                     description={firstSection.description}
                     bullets={firstSection.bullets}
                     skills={firstSection.skills}
                     demolink={firstSection.demolink}
                     codelink={firstSection.codelink}
                  />
               </Section>
               <Section>
                  <Sections
                     menu={this.state.menu}
                     skills={secondSection.skills}
                  />
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
