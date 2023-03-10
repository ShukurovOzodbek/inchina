import React, {useContext} from 'react'
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import {languageContext} from "../contexts/languageContext";
import china2back from "../assets/china2back.png";

const Header = () => {

    const {language, setLanguage} = useContext(languageContext)
    const modalOpen = () => {
        let modal = document.querySelector('.transition-class')
        modal.style.display = 'flex'
        modal.style.opacity = '1'
    }



    return (<div
            className='flex flex-col justify-between w-full gap-[90px] items-center border-dashed pb-14 border-b-[3px] lg:border-b-[4px] border-b-[#747474] '
            id='header'>
            <div className='relative w-full flex items-center justify-center lg:min-h-[520px]'>
                <div
                    className='w-full text-white right-0 top-0 flex justify-center back items-center p-2 flex-col gap-10 pb-[65px] pt-[30px] lg:h-[532px]'>
                    <div className={'flex justify-center lg:justify-between w-[80%] py-[30px]'}>
                        <div className={'hidden lg:flex gap-5 items-center'}>
                            <span className={'text-[20px] flex items-center gap-2 way'}>
                                <img src={phone} alt=""/>
                                        93 725 01 70</span>
                            <span className={'text-[20px] flex items-center gap-2 way'}>
                                <img src={phone} alt=""/>
                                        93 331 79 39</span>
                        </div>
                        <div className='text-center flex items-center gap-2'>
                            <button onClick={() => {
                                setLanguage('ru')
                                console.log(language)
                            }} className='text-[22px] text-[#6B941A] raleway'>RU
                            </button>
                            <span className='tect-[28px]'>|</span>
                            <button onClick={() => {
                                setLanguage('uz')
                                console.log(language)
                            }} className='text-[22px] raleway'>UZ
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col text-center gap-5 items-center'>
                        <h1 className='text-[42px] text-center font-bold sm:text-[52px] md:text-[45px] lg:text-[70px] uppercase'>Учеба
                            в китае</h1>
                        <h3 className='text-[28px] md:text-[40px] lg:text-[49px] mb-[17px]'>留学中国</h3>
                        <div className='text-center'>
                            <p className='block lg:hidden uppercase text-[14px] md:text-[16px] raleway'>Отправляем на
                                обучение в
                                Китай.</p>
                            <p className='block lg:hidden uppercase text-[14px] md:text-[16px] w-[100%] raleway'>на
                                грантовой основе и
                                по самым низким ценам</p>
                            <p className='hidden lg:block uppercase text-[23px] w-[100%] raleway'>Отправляем на обучение
                                в Китай</p>
                            <p className='hidden lg:block uppercase text-[23px] w-[100%] raleway'>на грантовой
                                основе</p>
                        </div>
                    </div>
                </div>
                <img className='absolute z-10 bottom-[-60px] w-[140px] md:w-[140px]' src={logo} alt=""/>
            </div>
            <button onClick={modalOpen}
                    className='w-[75%] md:w-1/2 lg:w-[350px] rounded-full bg-[#B00917] text-white text-[15px] cursor-pointer font-semibold uppercase raleway p-5'>бесплатная
                консультация
            </button>
        </div>
    )
}

export default Header
