import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import QR from '../assets/LOGO-IMAR-SON/qr.png'
import MapWidget from './MapWidget';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';


const Contacts = ({title, emailType}) => {
    const { t } = useTranslation();

    const info = {
        location: t('contacts.location'),
        phone: t('contacts.phone'),
        email: t('contacts.email'),
    };
  return (
    <section id='contacts' className="bg-white max-w-screen-3xl mx-auto">
      <div className="xl:grid xl:grid-cols-2">
        <div className="xl:col-span-1 flex flex-col justify-center px-16 space-y-12 py-12 bg-[#6484CD]">
          <div className='text-left'>
            <h2 className="text-4xl font-rubik font-bold text-left mb-12 uppercase text-white">{title}</h2>
            <div className="w-[50px] h-[6px] bg-white"></div>
          </div>
          <ContactForm emailType={emailType}/>
          </div>

            <div className="xl:col-span-1">
                <div className='bg-gradient-to-tr from-secondary2 to-secondary py-8 px-24'>
                    <ul id='socialLinks' className='flex justify-center items-center text-white'>
                        <a href="#"><FaInstagram size='24px' className='mr-6'/></a>
                        <a href="#"><FaFacebook size='24px' className='mr-6'/></a>
                        <a href="#"><FaTelegram size='24px' className='mr-6'/></a>
                    </ul>
                </div>
                <div className='px-16 py-12 bg-gradient-to-tr from-main2 to-main flex flex-col items-center justify-between space-y-12'>
                    <div className='flex flex-wrap justify-center space-y-12 sm:space-y-0 sm:justify-between w-full'>
                        <div className='space-y-6'>
                            <h4 className='text-left flex flex-row items-center text-alternative2 font-rubik text-sm font-medium'> 
                                <svg className='mr-3' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.78564 17.7012C6.83252 17.748 6.87939 17.7891 6.92627 17.8242C6.97314 17.8594 7.01416 17.8887 7.04932 17.9121C7.04932 17.9121 7.05518 17.9121 7.06689 17.9121C7.09033 17.9355 7.1167 17.9502 7.146 17.9561C7.17529 17.9619 7.20752 17.9648 7.24268 17.9648C7.26611 17.9648 7.29248 17.9619 7.32178 17.9561C7.35107 17.9502 7.3833 17.9355 7.41846 17.9121C7.46533 17.8887 7.50928 17.8594 7.55029 17.8242C7.59131 17.7891 7.63525 17.748 7.68213 17.7012C7.68213 17.7012 7.95752 17.3789 8.5083 16.7344C9.05908 16.0898 9.67725 15.2578 10.3628 14.2383C11.0483 13.2188 11.7017 12.0762 12.3228 10.8105C12.9438 9.55664 13.3188 8.31445 13.4478 7.08398C13.4595 6.95508 13.4712 6.82617 13.4829 6.69727C13.4946 6.56836 13.5005 6.43945 13.5005 6.31055C13.5005 5.43164 13.3364 4.61133 13.0083 3.84961C12.6685 3.08789 12.2144 2.41992 11.646 1.8457C11.0776 1.27148 10.4126 0.820312 9.65088 0.492188C8.87744 0.164062 8.05713 0 7.18994 0C6.32275 0 5.50244 0.164062 4.729 0.492188C3.96729 0.820312 3.30225 1.27148 2.73389 1.8457C2.16553 2.41992 1.71143 3.08789 1.37158 3.84961C1.04346 4.61133 0.879395 5.43164 0.879395 6.31055C0.879395 6.43945 0.885254 6.56836 0.896973 6.69727C0.908691 6.82617 0.92041 6.95508 0.932129 7.08398C1.07275 8.31445 1.45361 9.5625 2.07471 10.8281C2.70752 12.082 3.36963 13.2188 4.06104 14.2383C4.75244 15.2578 5.37939 16.0898 5.94189 16.7344C6.50439 17.3789 6.78564 17.7012 6.78564 17.7012ZM7.18994 2.25C7.75244 2.25 8.27979 2.35547 8.77197 2.56641C9.26416 2.77734 9.69189 3.06738 10.0552 3.43652C10.4185 3.80566 10.7114 4.23633 10.9341 4.72852C11.145 5.2207 11.2505 5.74805 11.2505 6.31055C11.2505 6.86133 11.145 7.38867 10.9341 7.89258C10.7114 8.38477 10.4185 8.8125 10.0552 9.17578C9.69189 9.53906 9.26416 9.82617 8.77197 10.0371C8.27979 10.2598 7.75244 10.3711 7.18994 10.3711C6.62744 10.3711 6.1001 10.2598 5.60791 10.0371C5.11572 9.82617 4.68799 9.53906 4.32471 9.17578C3.96143 8.8125 3.66846 8.38477 3.4458 7.89258C3.23486 7.38867 3.12939 6.86133 3.12939 6.31055C3.12939 5.74805 3.23486 5.2207 3.4458 4.72852C3.66846 4.23633 3.96143 3.80566 4.32471 3.43652C4.68799 3.06738 5.11572 2.77734 5.60791 2.56641C6.1001 2.35547 6.62744 2.25 7.18994 2.25Z" fill="#ffffff"/>
                                </svg>
                                {info.location}
                            </h4>
                            <h4 className='text-left flex flex-row items-center text-alternative2 font-rubik text-sm font-medium'> 
                                <svg className='mr-3' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.62549 4.7251C7.56689 4.104 7.39111 3.56494 7.09814 3.10791C6.79346 2.65088 6.47119 2.26709 6.13135 1.95654C5.7915 1.646 5.4751 1.40869 5.18213 1.24463C4.90088 1.09229 4.74854 1.01025 4.7251 0.998535C4.6665 0.975098 4.61084 0.95752 4.55811 0.945801C4.50537 0.934082 4.44971 0.934082 4.39111 0.945801C2.90283 1.19189 1.95947 1.62842 1.56104 2.25537C1.1626 2.88232 0.95752 3.21338 0.945801 3.24854C0.934082 3.29541 0.931152 3.34521 0.937012 3.39795C0.942871 3.45068 0.95166 3.50049 0.963379 3.54736C1.854 6.30127 2.93213 8.53369 4.19775 10.2446C5.4751 11.9556 6.76123 13.3032 8.05615 14.2876C9.35107 15.272 10.5669 15.9751 11.7036 16.397C12.8403 16.8188 13.7134 17.1118 14.3228 17.2759C14.4165 17.2993 14.5015 17.3228 14.5776 17.3462C14.6538 17.3696 14.7212 17.3931 14.7798 17.4165C14.8032 17.4282 14.8296 17.4341 14.8589 17.4341C14.8882 17.4341 14.9204 17.4341 14.9556 17.4341C14.9907 17.4341 15.0288 17.4312 15.0698 17.4253C15.1108 17.4194 15.1489 17.4048 15.1841 17.3813C15.2192 17.3696 15.5503 17.1118 16.1772 16.6079C16.8042 16.104 17.2231 15.1782 17.4341 13.8306C17.4458 13.772 17.4458 13.7134 17.4341 13.6548C17.4224 13.5962 17.4048 13.5435 17.3813 13.4966C17.3579 13.4614 17.0884 13.1216 16.5728 12.4771C16.0571 11.8325 15.1606 11.3579 13.8833 11.0532C13.8013 11.0298 13.7163 11.0298 13.6284 11.0532C13.5405 11.0767 13.4614 11.1177 13.3911 11.1763C12.9927 11.5161 12.5532 11.8384 12.0728 12.1431C11.5923 12.4478 11.2349 12.6235 11.0005 12.6704C10.2036 12.272 9.49463 11.8091 8.87354 11.2817C8.25244 10.7544 7.7251 10.2358 7.2915 9.72607C6.85791 9.21631 6.52979 8.75635 6.30713 8.34619C6.07275 7.93604 5.94971 7.66064 5.93799 7.52002C5.91455 7.35596 6.06104 7.03662 6.37744 6.56201C6.69385 6.0874 7.06299 5.62158 7.48486 5.16455C7.53174 5.10596 7.56982 5.03857 7.59912 4.9624C7.62842 4.88623 7.63721 4.80713 7.62549 4.7251Z" fill="#ffffff"/>
                                </svg>
                                {info.phone}
                            </h4>
                            <h4 className='text-left flex flex-row items-center text-alternative2 font-rubik text-sm font-medium'> 
                                <svg className='mr-3' width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0649 0.629883H1.31494C1.01025 0.629883 0.746582 0.741211 0.523926 0.963867C0.30127 1.18652 0.189941 1.4502 0.189941 1.75488V3.63574L9.18994 7.23926L18.1899 3.63574V1.75488C18.1899 1.4502 18.0786 1.18652 17.856 0.963867C17.6333 0.741211 17.3696 0.629883 17.0649 0.629883ZM0.189941 5.48145V13.0049C0.189941 13.3096 0.30127 13.5732 0.523926 13.7959C0.746582 14.0186 1.01025 14.1299 1.31494 14.1299H17.0649C17.3696 14.1299 17.6333 14.0186 17.856 13.7959C18.0786 13.5732 18.1899 13.3096 18.1899 13.0049V5.48145L9.18994 9.08496L0.189941 5.48145Z" fill="#ffffff"/>
                                </svg>
                                {info.email}
                            </h4>
                        </div>
                        <div className='w-32 hover:scale-110 transition-all duration-300 ease-in-out mix-blend-lighten'>
                            <img src={QR}/>
                        </div>
                    </div>
                    <MapWidget/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contacts;