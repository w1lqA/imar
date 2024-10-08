import React from "react";
import { useTranslation } from "react-i18next";
import ServiceItem from "./ServiceItem";
import Logo1 from '../assets/LOGO-IMAR-SON/4.png'
import Logo2 from '../assets/LOGO-IMAR-SON/2.png'
import Logo3 from '../assets/LOGO-IMAR-SON/3.png'

const Services = ({pageID}) => {
    const { t } = useTranslation();

    const services = t('services');
    const servicesSectionTitle = t('servicesSectionTitle');

    return (
        <div className="max-w-screen-3xl container shadow-lg bg-gradient-to-tl from-main2 to-main mx-auto flex flex-col items-center py-16">
            <h1 className="text-4xl font-rubik font-bold text-center mb-8 uppercase text-white">{servicesSectionTitle}</h1>
            <div className="w-[50px] h-[6px] bg-[#6484CD] mb-6"></div>
            <div className="flex flex-row items-start justify-center flex-wrap">
                {services.map((service, index) => (
                    <ServiceItem  index={index} page={index+1} logo={index === 0 ? Logo1 : index === 1 ? Logo2 : Logo3} title={service.title}/>
                ))}
            </div>
        </div>
    );
};

export default Services;
