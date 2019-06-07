import React from "react"
import "./Menu.css"

export const Menu = ({ menu, toggleContact, closeMenu, changePage }) => {
   return (
      <div
         // className="menu-overlay"
         className={menu ? "menu-overlay closed" : "menu-overlay"}
      >
         <div className="menu-all">
            <ul className="menu-list">
               <li className="menu-item-1">
                  <a
                     href="#home"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        changePage(1)
                     }}
                  >
                     Home
                  </a>
               </li>
               <li className="menu-item-2">
                  <a
                     href="#portfolio"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        changePage(2)
                     }}
                  >
                     Portfolio
                  </a>
               </li>
               <li className="menu-item-5">
                  <a
                     href="#skills"
                     className="vs-anchor"
                     onClick={() => {
                        closeMenu()
                        changePage(3)
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
