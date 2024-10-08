import React from 'react';

import logoHeader from '../assets/LOGO-IMAR-SON/s5.png'
import vid from '../assets/images/1.mp4'
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';


const Header = ({displayMode}) => {
  const {t} = useTranslation()
  return (
    <header className='relative flex justify-center py-32 bg-center bg-cover' >
      <video src={vid} autoPlay loop muted className='w-full h-full absolute inset-0 -z-10 object-cover ' aria-hidden draggable={false}/>
      <div className='bg-black bg-opacity-50 absolute inset-0 z-10' aria-hidden="true"></div>
      <div class="max-w-4xl mx-auto px-4 py-8 z-20">
        <div class="flex flex-col items-center">
          <div className="w-[200px] h-[4px] bg-[#6484CD] mb-12 "></div>
          <img src={logoHeader} className='w-[450px] drop-shadow-lg opacity-70'/>
          <div class={`${displayMode} justify-center mt-12`}>
            <a href='#about' class="bg-[#6484CD] flex flex-row items-center shadow-2xl text-sm text-white px-6 py-4 group font-bold text-center tracking-[4px] font-rubik uppercase">{t("headerButton")}
            <FaArrowRight className='-ml-3 opacity-0 group-hover:ml-3 group-hover:opacity-100 transition-all ease-in-out duration-300'/>
            </a>
          </div>
        </div>
      </div>

    </header>

  );
};

export default Header;
