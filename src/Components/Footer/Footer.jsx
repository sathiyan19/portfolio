import React from 'react'
import './Footer.css'

import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className='footer_cont'>
        <div className='footer_link_holder'>
            <div className='footer_link_shell'><a className='footer_link' href='https://www.linkedin.com/in/sathiyan-r/'><FaLinkedinIn/></a></div>
            <div className='footer_link_shell'><a className='footer_link' href='https://github.com/sathiyan19'><FaGithub/></a></div>
            <div className='footer_link_shell'><a className='footer_link' href='mailto:sathiyanr2003@gmail.com'><MdMailOutline/></a></div>
            <div className='footer_link_shell'><a className='footer_link' href='https://www.instagram.com/sathiyan19/'><FaInstagram/></a></div>
        </div>
        <div className='footer_copy_holder'>
            &#169; &nbsp; <span className='footer_copy_span'>2024 Sathiyan R</span>
        </div>
    </div>
  )
}

export default Footer