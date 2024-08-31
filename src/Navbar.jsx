import React from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
import { useState,useRef } from 'react'
import logo from './logo.svg';





const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const togleLinks = ()=>{
    // console.log(linksRef.current.getBoundingClientRect())
    setShowLinks(!showLinks)
  }

  const linkStyle = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px`:'0px'
  }
  return (
    <nav>

    <div className='nav-center'>
        <div className="nav-header">
            <span className='logo'>Mugisha Isaie</span>
            <button className='nav-toggle' onClick={togleLinks}>
              <FaBars />
            </button>
        </div>
        <div className= 'links-container' ref={linksContainerRef} style={linkStyle}>
          <ul className="links" ref={linksRef}>
            {links.map((link) =>{
              const {id, url, text} = link
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {social.map((socialIcons)=>{
            const {id, url, icon} = socialIcons;
            return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
            )
          })}
        </ul>
        
    </div>
            </nav>
  )
}

export default Navbar
