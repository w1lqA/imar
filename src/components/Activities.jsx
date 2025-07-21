import React from 'react';
import ActivityItem from './ActivityItem';

import Icon1 from '../assets/icons/i1.png'
import Icon2 from '../assets/icons/i2.png'
import Icon3 from '../assets/icons/i3.png'
import Icon4 from '../assets/icons/i4.png'
import { useTranslation } from 'react-i18next';

import bgActivities from '../assets/images/bgActivities.png'

const Activities = () => {
  const { t } = useTranslation();
  const activities = [
    {
      icon: Icon1,
      title: t('activities.0'),
    },
    {
      icon: Icon2,
      title: t('activities.1'),
    },
    {
      icon: Icon3,
      title: t('activities.2'),
    },
    {
      icon: Icon4,
      title: t('activities.3'),
    },
  ];

  return (
    <div className="relative max-w-screen-3xl  flex flex-col items-center bg-center bg-cover" >
      <img src={bgActivities} className='w-full h-full object-cover absolute -z-10 animate-pulse2 inset-0'/>
      <div className='backdrop-blur-[2px] bg-black bg-opacity-50 absolute inset-0 z-10' aria-hidden="true"></div>
      <div className='z-20 mx-auto py-16'>
      <h2 className="text-3xl lg:text-4xl font-rubik font-bold text-center mb-8 uppercase text-white">{t('activitiesSectionTitle')}</h2>
        <div className="w-[50px] h-[6px] bg-[#6484CD] mb-12 mx-auto"></div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:px-24 max-w-screen-2xl">
          {activities.map((activity, index) => (
            <ActivityItem key={index} icon={activity.icon} title={activity.title}/>
          ))}      
        </div>
    </div>
    </div>
  );
};

export default Activities;
