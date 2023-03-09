import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='relative p-10 flex flex-col items-center md:items-start bg-back w-full'>
            <div className='flex flex-col items-center md:items-start gap-5 w-full lg:w-[70%] lg:m-auto'>
                <img className='flex' src={logo} alt=""/>
                <div className='flex flex-col w-full gap-2 items-center md:items-start'>
                    <div className={'flex flex-col mt-2 gap-3lg:w-[70%]'}>
                        <a className='text-[20px] way' href="/#direction">Наши направления</a>
                        <a className='text-[20px] way' href="/#whyChina">Почему Китай</a>
                        <a className='text-[20px] way' href="/#popularPrograms">Популярные программы</a>
                        <a className='text-[20px] way' href="/#inNumbers">Мы в цифрах</a>
                        <a className='text-[20px] way' href="/#instruction">Работа в Китае</a>
                        <a className='text-[20px] way' href="/#reviews">Отзывы</a>
                        <a className='text-[20px] way' href="/#questions">Часто задаваемые вопросы</a>
                    </div>
                </div>
            </div>
            <p className={'hidden lg:block text-[#6B6969] m-auto mt-[50px]'}>ООО “INSTUDY SERVIS” 2020-2023</p>
        </div>

    )
}

export default Footer
