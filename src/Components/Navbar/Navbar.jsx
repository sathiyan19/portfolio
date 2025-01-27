import React,{useEffect, useState} from 'react'

import './Navbar.css'

// import nav_logo from '../../assets/pictures/shackles.webp'

const Navbar = () => {

    const [mob_nav,setMob_nav]=useState(false)

    const open_menu=()=>{
        setMob_nav(true)
    }

    const close_menu=()=>{
        setMob_nav(false)
    }
    useEffect(()=>{
      const navbar=document.getElementById("navbar")
      window.addEventListener("scroll",()=>{
        if(window.scrollY>=75){
          navbar.classList.add("add_nav_background")
        }else{
          navbar.classList.remove("add_nav_background")
        }
      })
    },[])

  return (
    <div className="navbar" id='navbar'>

      {/* <div className='navbar_horiz_divider_holder'>
        <div className='navbar_horiz_divider'></div>
      </div> */}
      <div className='nav_holder'>
      <nav className="nav">
        {/* <a className="nav-header" href="/">
          <div className="nav-title">
            <img
              className="nav_logo"
              src={nav_logo}
              alt=""
              srcset=""
            />
          </div>
        </a> */}

        <ul className="nav-list">
          <li className="nav_item"><a className="nav_link" href="#about">About</a></li>
          <li className="nav_item"><a className="nav_link" href="#skills">Skills</a></li>
          <li className="nav_item"><a className="nav_link" href="#works">Works</a></li>
          {/* <li className="nav_item"><a className="nav_link" href="/">Contact</a></li> */}
          {/* <li className="nav_item"><a className="nav_link" href="#">Our Team</a></li> */}
        </ul>

        <div className="nav_kebab_cont" id="kebab" onClick={open_menu}>
          <div className="nav_kebab_round"></div>
          <div className="nav_kebab_round"></div>
          <div className="nav_kebab_round"></div>
        </div>
      </nav>
      </div>

      <div className={`nav_drop_section ${mob_nav?`nav_drop_open_action`:'nav_drop_close_action'}`} id="nav_drop">
        <div className="nav_drop_close_cont">
          <div className="nav_drop_close" id="nav_close" onClick={close_menu}>
            <div className="nav_close_line line_1"></div>
            <div className="nav_close_line line_2"></div>
          </div>
        </div>
        <ul className="nav_drop_list">
          <li className="nav_drop_item">
            <a className="nav_drop_link" href="#about" onClick={close_menu}>ABOUT</a>
          </li>
          <li className="nav_drop_item">
            <a className="nav_drop_link" href="#skills" onClick={close_menu}>SKILLS</a>
          </li>
          <li className="nav_drop_item">
            <a className="nav_drop_link" href="#works" onClick={close_menu}>WORKS</a>
          </li>
          {/* <li className="nav_drop_item">
            <a className="nav_drop_link" href="/">CONTACT</a>
          </li> */}
          {/* <li className="nav_drop_item">
            <a className="nav_drop_link" href="/team">OUR TEAM</a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar