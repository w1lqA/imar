import React from 'react';
import ActivityItem from './ActivityItem';

import Icon1 from '../assets/icons/i1.png'
import Icon2 from '../assets/icons/i2.png'
import Icon3 from '../assets/icons/i3.png'
import Icon4 from '../assets/icons/i4.png'
import Icon5 from '../assets/icons/i5.png'
import { useTranslation } from 'react-i18next';
import bgActivities from '../assets/images/bgActivities.png'

const Activities = () => {
  const { t } = useTranslation();
  const activities = [
    {
      icon: Icon1,
      title: t('activities.0.title'),
      description: t('activities.0.description')
    },
    {
      icon: Icon2,
      title: t('activities.1.title'),
      description: t('activities.1.description')
    },
    {
      icon: Icon3,
      title: t('activities.2.title'),
      description: t('activities.2.description')
    },
    {
      icon: Icon4,
      title: t('activities.3.title'),
      description: t('activities.3.description')
    },
    {
      icon: Icon5,
      title: t('activities.4.title'),
      description: t('activities.4.description')
    },
  ];

  return (
    <div className="relative max-w-screen-3xl flex flex-col items-center bg-center bg-cover" >
      <img src={bgActivities} className='w-full h-full object-cover absolute -z-10 animate-pulse2 inset-0'/>
      <div className='backdrop-blur-[2px] bg-black bg-opacity-50 absolute inset-0 z-10' aria-hidden="true"></div>
      <div className='z-20 mx-auto py-16'>
        <h2 className="text-4xl font-rubik font-bold text-center mb-8 uppercase text-white">{t('activitiesSectionTitle')}</h2>
        <div className="w-[50px] h-[6px] bg-[#6484CD] mb-12 mx-auto"></div>
        <div className="grid xs:grid-cols-3 sm:grid-cols-6 xl:px-24 max-w-screen-2xl uppercase">
          {activities.slice(0, 3).map((activity, index) => (
            <ActivityItem classes={'col-span-1 sm:col-span-2'} key={index} icon={activity.icon} title={activity.title}/>
          ))}
          <ActivityItem classes={'col-span-1 sm:col-span-2 sm:col-start-2'} key={activities[3].index} icon={activities[3].icon} title={activities[3].title} />
          <ActivityItem classes={'col-span-1 sm:col-span-2 sm:col-start-4'} key={activities[4].index} icon={activities[4].icon} title={activities[4].title} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
