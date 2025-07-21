import React from 'react';

import Logo1 from '../assets/icons/system1.png'
import Logo2 from '../assets/icons/system2.png'
import Logo3 from '../assets/icons/system3.png'

import bgHeader1 from '../assets/images/bgSystem1.png'
import bgHeader2 from '../assets/images/bgSystem2.png'
import bgHeader3 from '../assets/images/bgSystem3.png'

import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Services from '../components/Services';
import { useTranslation } from 'react-i18next';

const ServicePage = ({page}) => {
    const pageID = page-1
    const {t} = useTranslation()
    const servicePage = t('servicePage')
    const logos = [Logo1, Logo2, Logo3]
    const bgs= [bgHeader1, bgHeader2, bgHeader3]

  return (
    <div>
        <header className='relative flex justify-center py-24 bg-center bg-cover'  >
            <img src={bgs[pageID]} className='w-full h-full object-cover absolute -z-10 animate-pulse2 bottom-0'/>
            <div className='backdrop-blur-[2px] bg-black bg-opacity-50 absolute inset-0' aria-hidden="true"></div>
            <div class="max-w-4xl mx-auto px-4 py-12 z-10">
                <div class="flex flex-col items-center">
                <div className="w-[200px] h-[4px] bg-[#6484CD] mb-12"></div>
                <h2 className="text-4xl font-rubik font-bold text-center mb-6 uppercase text-white">{servicePage[pageID].title}</h2>
                </div>
            </div>
        </header>
        
        <div className="mx-auto py-16 flex flex-col items-center bg-gradient-to-b from-main2 to-main">
            <div className='flex flex-col items-center max-w-screen-2xl'>
                <div className='flex flex-col lg:flex-row justify-between items-start'>
                    <div className='w-40 lg:flex hidden'>
                        <img src={logos[pageID]}/>
                        
                    </div>
                    <li className='flex flex-col items-start text-alternatives text-lg font-normal px-12 text-white max-w-screen-sm'>
                    {servicePage[pageID].description.map((item,index) =>(
                        <div><ul>{item}</ul>{index!==servicePage[pageID].description.length-1 ? <br/> : ''}</div>
                    ))}
                    </li>
                </div>
            </div>
        </div>
        
        <Services pageID={pageID}/>

        <Contacts title={t("contacts.title1")} emailType={'IMAR CONTACT'}/>
        <Footer/>
    </div>
  );
};

export default ServicePage;
