import React, { useState } from "react";
import "./ProjectDisp.css";
import { ProjectCard } from "../../widgets";

import { project_list } from "../../constants/projects";
import { FaSearch } from "react-icons/fa";

const ProjectDisp = () => {
  const [project_name, setProjectname] = useState("");
  const filtered = project_list.filter((opt) => {
    return opt.tech_stack.some(tech => tech.toLowerCase().includes(project_name.toLowerCase()));
  });
  return (
    <div className="project_disp_layout">
      <div className="search_bar">
        <div className="form-control">
        
          <input
            className="login-input"
            autoComplete="username"
            value={project_name}
            type="text"
            placeholder="Search..."
            onChange={(e) => setProjectname(e.target.value)}
          />
          {/* <i className="prefix fa fa-search"></i> */}
          <FaSearch className="search_icon"/>
        </div>
      </div>

      <div className="project_cards_holder">
        { filtered.length===0 &&<div className="no_project">No Courses...</div>}
        {filtered.map((item) => {
          return (
            <ProjectCard
              title={item.title}
              tech_stack={item.tech_stack.join(" | ")}
              head_img={item.head_img}
              desc={item.desc}
              dur={item.dur}
              venue={item.venue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDisp;
