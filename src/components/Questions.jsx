import React from 'react'
import p325 from '../assets/p325.png'
import plus from '../assets/plus.png'
import sticker2 from '../assets/sticker2.png'

const Questions = () => {
    return (
        <div className='w-full relative min-h-[300px] flex flex-col items-center justify-center gap-[30px] p-6 pb-[50px]' id='questions'>
            <img className='absolute top-[-210px] left-0' src={p325} alt=""/>
            <h2 className='uppercase text-[24px] md:text-[30px] mt-4 font-bold text-center lg:text-[40px]'>ЧАСТО Задаваемые
                вопросы</h2>
            <div className='w-full flex gap-[7px] md:w-[76%] lg:w-[60%] justify-between items-center'>
                <div className={'w-full flex flex-col gap-[7px] md:w-full lg:w-[50%]'}>
                    <div className='rounded-[17px] flex justify-between items-center bg-man p-5'>
                        <p className='way text-[14px] font-semibold md:text-[16px]'>Какие документы мне нужно подготовить для Китая?</p>
                        <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                            <img className='w-[30px]' src={plus} alt=""/>
                        </div>
                    </div>
                    <div className='rounded-[17px] flex justify-between items-center bg-man p-5'>
                        <p className='way text-[14px] font-semibold md:text-[16px]'>Какие документы мне нужно подготовить для Китая?</p>
                        <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                            <img className='w-[30px]' src={plus} alt=""/>
                        </div>
                    </div>
                    <div className='rounded-[17px] flex justify-between items-center bg-man p-5'>
                        <p className='way text-[14px] font-semibold md:text-[16px]'>Какие документы мне нужно подготовить для Китая?</p>
                        <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                            <img className='w-[30px]' src={plus} alt=""/>
                        </div>
                    </div>
                    <div className='rounded-[17px] flex justify-between items-center bg-man p-5'>
                        <p className='way text-[14px] font-semibold md:text-[16px]'>Какие документы мне нужно подготовить для Китая?</p>
                        <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                            <img className='w-[30px]' src={plus} alt=""/>
                        </div>
                    </div>
                </div>
                <img className={'hidden lg:block w-[350px] object-cover'} src={sticker2} alt=""/>
            </div>
        </div>
    )
}

export default Questions
