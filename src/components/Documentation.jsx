import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon1 from '../assets/icons/doc1.png'
import Icon2 from '../assets/icons/doc2.png'
const Documentation = () => {
    const {t} = useTranslation();
    const documentsList = t('documentsList', { returnObjects: true })
    return (
        <div className="max-w-screen-3xl container shadow-2xl from-main to-main2 bg-gradient-to-b flex items-center flex-col py-16">
            <div className='flex lg:flex-row flex-col items-center justify-between mb-8'>
                <div className='w-24 lg:flex hidden my-auto'>
                    <img src={Icon1}/>
                </div>
                <h2 className="lg:mx-12 sm:mx-0 text-3xl lg:text-4xl font-rubik font-bold text-center uppercase text-white">{t('documentsSectionTitle')}</h2>
                <div className='w-28 lg:flex hidden my-auto'>
                    <img src={Icon2}/>
                </div>
            </div>
            <div className='flex flex-row mb-12'>
                <div className='w-12 lg:hidden flex my-auto'>
                    <img src={Icon1}/>
                </div>
                <div className='w-16 lg:hidden flex my-auto'>
                    <img src={Icon2}/>
                </div>
            </div>
            <div className="w-[50px] h-[6px] bg-[#6484CD] mb-12 lg:flex hidden"></div>
            <div className="grid grid-cols1 lg:grid-cols-2 text-white text-lg">
                <ul className='list-disc max-w-screen-sm px-12'>
                    {documentsList.slice(0,4).map((item)=>(
                        <div><li>{item}</li> <br /></div>
                    ))}
                </ul>
                <ul className='list-disc max-w-screen-sm px-12'>
                    {documentsList.slice(4).map((item)=>(
                        <div><li>{item}</li> <br /></div>
                    ))}
                    
                </ul>


            </div>
        </div>
    )
  }

export default Documentation