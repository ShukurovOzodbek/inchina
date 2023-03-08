import React from 'react'
import china from '../assets/china.png'
import desktopChina from '../assets/desktopChina.png'
import logo from '../assets/logo.png'

const Header = () => {

    const modalOpen = () => {
        let modal = document.querySelector('.transition-class')
        modal.style.display = 'flex'
        modal.style.opacity = '1'
    }

    return (
        <div
            className='flex flex-col w-full gap-[90px] items-center border-dashed pb-14 border-b-[3px] border-b-[#747474]'
            id='header'>
            <div className='relative w-full flex items-center justify-center'>
                <div
                    className='w-full text-white right-0 top-0 flex justify-center back items-center p-2 flex-col gap-10 py-[65px]'>
                    <div className='text-center flex items-center gap-2'>
                        <a className='text-[22px] text-[#6B941A] raleway' href="">RU</a>
                        <span className='tect-[28px]'>|</span>
                        <a className='text-[22px] raleway' href="">UZ</a>
                    </div>
                    <div className='w-full flex flex-col text-center gap-5 items-center'>
                        <h1 className='text-[42px] text-center font-bold sm:text-[52px] md:text-[45px] lg:text-[50px]'>Учеба
                            в китае</h1>
                        <h3 className='text-[28px] md:text-[32px] mb-[17px]'>留学中国</h3>
                        <div className='text-center'>
                            <p className='block lg:hidden uppercase text-[14px] md:text-[16px] raleway'>Отправляем на обучение в
                                Китай.</p>
                            <p className='block lg:hidden uppercase text-[14px] md:text-[16px] w-[100%] raleway'>на грантовой основе и
                                по самым низким ценам</p>
                            <p className='hidden lg:block uppercase text-[18px] w-[100%] raleway'>Отправляем на обучение в Китай</p>
                            <p className='hidden lg:block uppercase text-[18px] w-[100%] raleway'>на грантовой основе</p>
                        </div>
                    </div>
                </div>
                <img className='absolute z-10 bottom-[-60px] w-[140px] md:w-[140px]' src={logo} alt=""/>
            </div>
            <button onClick={modalOpen}
                    className='w-[75%] md:w-1/2 lg:w-[30%] rounded-full bg-[#B00917] text-white text-[15px] cursor-pointer font-semibold uppercase raleway p-5'>бесплатная
                консультация
            </button>
        </div>
    )
}

export default Header
