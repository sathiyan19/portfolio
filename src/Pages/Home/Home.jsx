import React from 'react'
import './Home.css'
import './About.css'
import './Skills.css'

import sathiyan from '../../assets/pictures/Portfolio_pic.png'
import { FaLinkedinIn,FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { InfiniteScroll, ProjectDisp } from '../../Components';
import { Cursor, Heading, RevealingContent } from '../../widgets'

import { skill_list_lap_1,skill_list_lap_2,skill_list_mob_1,skill_list_mob_2,skill_list_tab_1,skill_list_tab_2 } from '../../constants/projects'
import {about_me_1,about_me_2,about_me_3,skills_cont_1,skills_cont_2,works_cont } from '../../constants/contents'

const Home = () => {
  return (
    <>
    <div className='home_cont'>
        <div className='hero_sec_holder'>
            <div className='hero_sec_details_holder'>
                <div className='hero_sec_text'>
                    <div className='hero_sec_hi'>Hi I'm</div>s
                    <div className='hero_sec_name'>Sathiyan R</div>
                </div>
                <div className='hero_sec_pos'>Full Stack<br/>Developer</div>
            </div>
            <div className="hero_img_sec_holder">
                <div className='hero_img_holder'>
                    <img className='hero_img' src={sathiyan} alt='Sathiyan R'/>
                </div>
                <div className='hero_img_sec_links'>
                    <div className='hero_img_link_holder'>
                        <a href='https://www.linkedin.com/in/sathiyan-r/' target='blank' className='hero_img_link'><FaLinkedinIn className='hero_img_link_icon'/></a>
                    </div>
                    <div className='hero_img_link_holder'>
                        <a href='mailto:sathiyanr2003@gmail.com' target='blank' className='hero_img_link'><MdMailOutline className='hero_img_link_icon'/></a>
                    </div>
                </div>
                <div className='hero_img_sec_links_top'>
                    <div className='hero_img_link_holder_top'>
                        <a href='https://github.com/sathiyan19' target='blank' className='hero_img_link_top'><FaGithub className='hero_img_link_icon_top'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='about_holder' id='about'>
        {/* <div className='hero_back_1'></div>
        <div className='hero_back_2'></div>
        <div className='hero_back_1'></div> */}
        <Heading content="About Me"/>
        <RevealingContent content={about_me_1} pad_px={50}/>
        <RevealingContent content={about_me_2} pad_px={50}/>
        <RevealingContent content={about_me_3} pad_px={50}/>
    </div>

    <div className='skills_sec' id='skills'>
        <Heading content="Skills"/>
        <div className='skills_holder'>
            <div className='skills_scroller lap_view_scroller'>
                <InfiniteScroll direction='left' skill_set={skill_list_lap_1}/>
                <InfiniteScroll direction='right' skill_set={skill_list_lap_2}/>
            </div>
            <div className='skills_scroller tab_view_scroller'>
                <InfiniteScroll direction='left' skill_set={skill_list_tab_1}/>
                <InfiniteScroll direction='right' skill_set={skill_list_tab_2}/>
            </div>
            <div className='skills_scroller mob_view_scroller'>
                <InfiniteScroll direction='left' skill_set={skill_list_mob_1}/>
                <InfiniteScroll direction='right' skill_set={skill_list_mob_2}/>
            </div>
        </div>
        <RevealingContent content={skills_cont_1} pad_px={50}/>
        <RevealingContent content={skills_cont_2} pad_px={50}/>
    </div>

     <div className='projects_sec' id='works'>
        <Heading content="Works"/>
        <RevealingContent content={works_cont} pad_px={50}/>
         <ProjectDisp/>
     </div>

     <Cursor/>
     </>
  )
}

export default Home