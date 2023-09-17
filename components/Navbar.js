/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"
// import reactIcon from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="../images/react-icon-small.png" className="logo-icon" />
                <span className='site-name'>ReactFacts</span>
            </div>
            <span className='extra-title'>React Course - Project 1</span>
        </div>
    )
}