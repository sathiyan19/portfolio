import React from "react";
import "./ProjectCard.css";

import { FaRegClock } from "react-icons/fa6";

const ProjectCard = ({ tech_stack, head_img, title, desc, dur, venue }) => {
  return (
    <div className="project_card_layout">
      <div className="project_card_img_holder">
        <img className="project_card_img" src={head_img} alt="project" />
      </div>
      <div className="project_card_details">
        <div className="project_card_title">{title}</div>
        <div className="project_card_tech_stack">{tech_stack}</div>

        <div className="project_card_desc">{desc}</div>
        <div className="project_card_foot">
          <div className="project_card_duration">
            <span className="project_card_dur_logo">
              <FaRegClock />
            </span>
            {dur}
          </div>
          {/* <div className='project_card_duration'>
                    <span className='project_card_dur_logo'><LiaUniversitySolid /></span> {venue}
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
