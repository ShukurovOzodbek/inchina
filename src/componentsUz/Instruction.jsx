import React from 'react'
import doctor from '../assets/doctor.png'
import doctor2 from '../assets/doctor2.png'

const Instruction2 = () => {
    return (
        <div className='w-full bg-[#D9D9D9] bg-back md:flex items-center justify-center'
             id='instruction'>
            <div
                className='w-full md:w-[76%] min-h-[300px] lg:min-h-[400px] flex items-center justify-center relative lg:w-[60%]'>
                <img className='w-[380px] block md:hidden absolute bottom-0 left-0' src={doctor} alt=""/>
                <img className='md:w-[530px] lg:w-[740px] hidden md:block absolute bottom-0 left-[-50px]' src={doctor2} alt=""/>
                <div
                    className={'w-[52%] md:w-[40%] lg:w-[30%] flex flex-col gap-2 absolute right-[20px] lg:right-[60px]'}>
                    <h2 className='flex flex-col text-[29px] md:text-[32px] lg:text-[36px]'>
                        <b className='text-[#B10A17] leading-3'>Bepul</b>
                        <b className={'leading-10 text-[#393939]'}>Ro'yxatnoma</b>
                    </h2>
                    <p className='text-[14px] w-[99.6%] md:text-[16px] way'>Qanday qilib chet ellik Xitoyda ish topishi
                        mumkin?</p>
                    <button
                        className='rounded-full bg-[#393939] text-white text-[12px] cursor-pointer font-semibold uppercase raleway p-4'>ro'yxatnomani
                        yuklab olish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Instruction2
