import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, description, classes, t, projectID}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Link onClick={scrollToTop} to={`/project${projectID}`} className="flex flex-col space-y-6 w-[320px] m-6 scale-100 hover:scale-95 transition-all ease-in-out duration-300 group">
        <img src={image} className={`shadow-2xl w-[320px] h-[200px] ${classes}`}/>
        <div className="bg-none transition-all ease-in-out duration-300 group-hover:bg-secondary2 border-2 border-[#ffffff15] p-8 flex flex-col space-y-3 items-left justify-between h-[170px]">
            <h3 className="font-arimo uppercase font-bold text-base text-white">{title}</h3>
            <div class="border-[3px] border-alternative2 text-sm text-alternative px-3 py-2 font-bold text-left tracking-[4px] uppercase">{t("projects.projectCardButton")}</div>
        </div>
    </Link>
  );
};

export default ProjectCard;
