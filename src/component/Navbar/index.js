import React from 'react'

import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown,FaBars  } from "react-icons/fa";
import "./index.css"

const tablist = [
  {id :"shop", tabName : "SHOP"},
  {id :"skill", tabName : "SKILL"},
  {id :"stories", tabName : "STORIES"},
  {id:"about", tabName : "ABOUT"},
  {id:"contact us", tabName : "CONTACT US"}
]

function Navbar() {
  return (
   <nav className=''>
    <div className='nav-container'>  
    <FaBars size={25} className="side-bar"/>
      <img src= "https://res.cloudinary.com/dpgoeszn9/image/upload/v1712487848/AppScriptLogo_fym0fe.png" alt="values" className="logo-image"/>
      <h1>LOGO</h1>
      <ul className="options-list">
                <li>
                    <CiSearch size={25}/>
                </li>
                <li>    
                    <MdOutlineFavoriteBorder size={25}/>
                </li>
                <li>   
                    <IoBagOutline size={25}/>
                </li>    
                <li>    
                    <CgProfile size={25}/>
                </li>
                <li className="lang-block">
                    <p>ENG</p>
                    <FaAngleDown size={25}/>
                </li>
            </ul>
            </div>
       
            <ul className="tabs-container">
           {tablist.map(each=>(
            <li key={each.id}> 
                {each.tabName}
            </li>
           ))}
        </ul>
   </nav>
  )
}

export default Navbar