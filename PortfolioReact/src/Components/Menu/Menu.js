import React from "react"
import "./Menu.css"

export const Menu = ({ menu, toggleContact, goToPage, closeMenu }) => {
   return (
      <div
         // className="menu-overlay"
         className={menu ? "menu-overlay closed" : "menu-overlay"}
      >
         <div className="menu-all">
            <ul className="menu-list">
               <li className="menu-item-1">
                  <a
                     href="#view-1"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        goToPage(0)
                     }}
                  >
                     Home
                  </a>
               </li>
               <li className="menu-item-2">
                  <a
                     href="#view-2"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        goToPage(1)
                     }}
                  >
                     Portfolio
                  </a>
               </li>
               <li className="menu-item-5">
                  <a
                     href="#view-5"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        goToPage(2)
                     }}
                  >
                     Skills
                  </a>
               </li>
               <li className="menu-item-4">
                  <a
                     href="/"
                     onClick={event => {
                        event.preventDefault()
                        toggleContact()
                     }}
                  >
                     Contact | About
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}
