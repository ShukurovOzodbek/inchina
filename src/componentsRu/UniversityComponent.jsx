import React from 'react'
import back from '../assets/back.png'
import money from '../assets/money.png'

const UniversityComponent = ({ univ, year, img, img2, img3, text }) => {

    return (
        <div className='flex flex-col bg-[#EEEEEE] rounded-3xl min-w-[250px] lg:min-w-[0px] lg:max-w-[300px] lg:max-w-[380px]'>
            <div className='relative w-full'>
                <div className='absolute w-full bottom-[10%] flex flex-col gap-2'>
                    <div className='bg-[#6B941A] w-[76%] text-white p-[7px] px-5'>
                        <span className='font-[600] text-[14px]'>{univ}</span>
                    </div>
                    <div className='flex text-white gap-2 items-center'>
                        <div className='ml-4 flex items-center gap-1'>
                            {img}
                            <span className='text-[14px] way leading-[6px]'>
                                {year}
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img width={'15px'} src={money} alt=""/>
                            <span className='text-[14px] way leading-[6px]'>Полный грант</span>
                        </div>
                    </div>
                </div>
                <img className='w-full rounded-t-3xl' src={img3} alt="" />
            </div>
            <div className='p-6 relative bg-back'>
                <p className='way text-[15px] lg:text-[15px] leading-5 text-[#393939]'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default UniversityComponent
