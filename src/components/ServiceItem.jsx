import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const ServiceItem = ({ logo, title, page, styles, index}) => {
  const {t} = useTranslation()
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <Link onClick={scrollToTop} to={`${index===1?`https://imarproject.com/` : `/service${page}`}`} className={`${styles} flex px-12 flex-col items-center space-y-6 p-6 scale-100 hover:scale-95 hover:opacity-70 transition-all ease-in-out duration-300`}>
      <h2 className="font-rubik text-center font-bold text-lg text-alternative uppercase">{title}</h2>
      <div className='w-48  flex my-auto '>
          <img src={logo}/>
      </div>
      <div class="border-[3px] border-[#DFDFDF] text-sm text-alternative px-3 py-2 font-bold text-left tracking-[4px] uppercase">{t("projects.projectCardButton")}</div>
      {/* <p className="font-normal text-sm text-[#696666] leading-8 max-w-96 px-6">
          {description}
      </p> */}
    </Link>
  );
};

export default ServiceItem;
