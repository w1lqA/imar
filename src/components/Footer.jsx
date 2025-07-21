import React from "react";
import logoNav from '../assets/LOGO-IMAR-SON/2.png'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
      
    const {t} = useTranslation()
    const info = {
        phone1: '+7 995 845 50 10',
        phone2:  '+7 995 845 10 19',
        email: 'info@imarproject.com',
        copyright: `${new Date().getFullYear()} IMAR. ${t("footer.copyright")}`
    }
    return (
      <footer className="bg-gradient-to-bl from-main to-main2 text-white py-8 max-w-screen-3xl mx-auto xl:px-0 px-24">
        <div className="container mx-auto text-center flex-wrap sm:flex-nowrap flex  flex-row items-center justify-between max-w-screen-xl">
            <Link onClick={scrollToTop} to={'/'} className='w-32 h-10 flex my-auto mx-auto sm:mx-0'>
                <img src={logoNav}/>
            </Link>
            <ul className="flex flex-col xl:flex-row items-start justify-center mx-auto sm:mx-0 xl:space-x-12 font-normal text-sm text-alternative2 mt-6 sm:mt-0 ">
                <li>{t("footer.phone")}: {info.phone1} | {info.phone2}</li>
                <li>{t("footer.email")}: {info.email}</li>
                <li>&copy; {info.copyright}</li>
            </ul>
            <ul id="socialLinks" className='flex justify-center items-center text-white mx-auto sm:mx-0 mt-6 sm:mt-0 '>
                <a href="#"><FaInstagram size='24px' className="mr-6"/></a>
                <a href="#"><FaFacebook size='24px' className="mr-6"/></a>
                <a href="#"><FaTelegram size='24px' className="mr-6"/></a>
            </ul>
        </div>
      </footer>
    )
}
export default Footer;