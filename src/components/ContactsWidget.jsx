import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { CgClose } from 'react-icons/cg';
import { FaWhatsapp } from 'react-icons/fa';

export const ContactsWidget = () => {
    const {t} = useTranslation()

    const info = {
        location: t('contacts.location'),
        phone1: '+7 995 845 50 10',
        phone2: '+7 995 845 10 19',
        email: t('contacts.email'),
    };

    const [isWidgetOpen, setIsWidgetOpen] = useState(true);

    return (
        <div className={`${isWidgetOpen ? 'flex' : 'hidden'} fixed flex-col bottom-4 gap-4 right-4 z-[100] bg-mainblue/20 backdrop-blur-sm shadow-lg shadow-white/5 py-6 px-8 text-white border-white/20 border`}>
            {/* <button className='absolute top-2 right-2' onClick={() => setIsWidgetOpen(false)}>
            <CgClose/>
            </button> */}
            <h3 className='text-start text-md font-medium uppercase'>Связаться с нами</h3>
            <div className='flex flex-row items-center justify-center gap-4 font-rubik text-sm font-medium'>
            <a href="https://wa.me/79958455010" className='text-left gap-3 flex flex-row items-center text-alternative'> 
                <FaWhatsapp size={'24px'}/>
            </a>
            <div className='h-8 w-[1px] bg-alternative2/30'/>
            <a href="tel:79958455010" className='text-left gap-3 flex flex-row items-center text-alternative'> 
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.62549 4.7251C7.56689 4.104 7.39111 3.56494 7.09814 3.10791C6.79346 2.65088 6.47119 2.26709 6.13135 1.95654C5.7915 1.646 5.4751 1.40869 5.18213 1.24463C4.90088 1.09229 4.74854 1.01025 4.7251 0.998535C4.6665 0.975098 4.61084 0.95752 4.55811 0.945801C4.50537 0.934082 4.44971 0.934082 4.39111 0.945801C2.90283 1.19189 1.95947 1.62842 1.56104 2.25537C1.1626 2.88232 0.95752 3.21338 0.945801 3.24854C0.934082 3.29541 0.931152 3.34521 0.937012 3.39795C0.942871 3.45068 0.95166 3.50049 0.963379 3.54736C1.854 6.30127 2.93213 8.53369 4.19775 10.2446C5.4751 11.9556 6.76123 13.3032 8.05615 14.2876C9.35107 15.272 10.5669 15.9751 11.7036 16.397C12.8403 16.8188 13.7134 17.1118 14.3228 17.2759C14.4165 17.2993 14.5015 17.3228 14.5776 17.3462C14.6538 17.3696 14.7212 17.3931 14.7798 17.4165C14.8032 17.4282 14.8296 17.4341 14.8589 17.4341C14.8882 17.4341 14.9204 17.4341 14.9556 17.4341C14.9907 17.4341 15.0288 17.4312 15.0698 17.4253C15.1108 17.4194 15.1489 17.4048 15.1841 17.3813C15.2192 17.3696 15.5503 17.1118 16.1772 16.6079C16.8042 16.104 17.2231 15.1782 17.4341 13.8306C17.4458 13.772 17.4458 13.7134 17.4341 13.6548C17.4224 13.5962 17.4048 13.5435 17.3813 13.4966C17.3579 13.4614 17.0884 13.1216 16.5728 12.4771C16.0571 11.8325 15.1606 11.3579 13.8833 11.0532C13.8013 11.0298 13.7163 11.0298 13.6284 11.0532C13.5405 11.0767 13.4614 11.1177 13.3911 11.1763C12.9927 11.5161 12.5532 11.8384 12.0728 12.1431C11.5923 12.4478 11.2349 12.6235 11.0005 12.6704C10.2036 12.272 9.49463 11.8091 8.87354 11.2817C8.25244 10.7544 7.7251 10.2358 7.2915 9.72607C6.85791 9.21631 6.52979 8.75635 6.30713 8.34619C6.07275 7.93604 5.94971 7.66064 5.93799 7.52002C5.91455 7.35596 6.06104 7.03662 6.37744 6.56201C6.69385 6.0874 7.06299 5.62158 7.48486 5.16455C7.53174 5.10596 7.56982 5.03857 7.59912 4.9624C7.62842 4.88623 7.63721 4.80713 7.62549 4.7251Z" fill="#ffffff"/>
                </svg>
            </a>
            <div className='h-8 w-[1px] bg-alternative2/30'/>
            <p className='flex flex-col items-center justify-center text-alternative font-rubik text-sm font-medium'>
                <span>{info.phone1} </span>
                <span>{info.phone2} </span>
            </p>
            </div>
        </div>
    )
}
