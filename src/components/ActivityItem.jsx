import React from 'react';

const ActivityItem = ({ icon, title, classes }) => {
  return (
    <div className={`flex items-center space-x-4 p-4 ${classes} max-w-md`}>
      {/* <Icon className="text-4xl text-[#A2B0C1]" /> */}
      <img src={icon} className='w-16 drop-shadow-sm'/>
      <h3 className="text-base font-bold font-rubik text-white">{title}</h3>
      {/* <p className="text-[#666666] font-normal text-sm">{title}</p> */}
    </div>
  );
};

export default ActivityItem;
