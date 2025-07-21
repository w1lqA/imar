import React from 'react';

const ActivityItem = ({ icon, title, classes }) => {
  return (
    <div className={`flex items-center space-x-4 p-8 ${classes} max-w-md`}>
      <img src={icon} className='w-16 drop-shadow-sm'/>
      <h3 className="text-base font-semibold font-rubik text-white">{title}</h3>
    </div>
  );
};

export default ActivityItem;
