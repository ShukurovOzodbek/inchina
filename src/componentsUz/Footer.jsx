import React from 'react'
import logo from '../assets/logo.png'

const Footer2 = () => {
    return (
        <div className='relative p-10 flex flex-col items-center md:items-start bg-back w-full'>
            <div className='flex flex-col items-center md:items-start gap-5 w-full lg:w-[70%] lg:m-auto'>
                <img className='flex' src={logo} alt=""/>
                <div className='flex flex-col w-full gap-2 items-center md:items-start'>
                    <div className={'flex flex-col mt-2 gap-3lg:w-[70%]'}>
                        <a className='text-[20px] way text-[#393939]' href="#direction">Bizning yo'nalishlarimiz</a>
                        <a className='text-[20px] way text-[#393939]' href="#whyChina">Nega Xitoy</a>
                        <a className='text-[20px] way text-[#393939]' href="#popularPrograms">Eng mashxur dasturlar</a>
                        <a className='text-[20px] way text-[#393939]' href="#inNumbers">Biz sonlarda</a>
                        <a className='text-[20px] way text-[#393939]' href="#instruction">Xitoyda ish</a>
                        <a className='text-[20px] way text-[#393939]' href="#reviews">Sharhlar</a>
                        <a className='text-[20px] way text-[#393939]' href="#questions">Ko'p beriladigan savollar</a>
                    </div>
                </div>
            </div>
            <p className={'hidden lg:block text-[#6B6969] m-auto mt-[50px]'}>ООО “INSTUDY SERVIS” 2020-2023</p>
        </div>

    )
}

export default Footer2
