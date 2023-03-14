import React from 'react'
import time from '../assets/time.png'
import books from '../assets/books.png'
import filials from '../assets/filials.png'
import diagnostic from '../assets/diagnostic.png'
import flower2 from '../assets/flower2.png'


const InChinaNumbers2 = () => {
    return (
        <div className='p-5 pt-16 relative md:flex items-center flex-col' id='inNumbers'>
            <img className='absolute left-0' src={flower2} alt=""/>
            <h2 className='uppercase text-[27px] text-center font-[900] md:text-[30px] lg:text-[40px] text-[#393939]'><span
                className='text-[#B10A17]'>INCHINA </span> SONLARDA</h2>
            <p className='text-center text-[#747474] pt-4 text-[13.8px] lg:w-[60%] way font-[500] leading-[18px] lg:leading-7 md:text-[16px] lg:text-[22px]'>Наша
                Bizning jamoamiz butunlay Xitoy universitetlari bitiruvchilaridan iborat, shuning uchun biz Xitoydagi
                talabalar hayotining barcha nuanslari haqida aniq bilamiz.</p>
            <div
                className='flex flex-wrap lg:flex-nowrap lg:p-5 lg:m-10 lg:mb-[70px] lg:rounded-2xl lg:bg-[#3939390f] gap-2 py-10 md:w-[76%] lg:w-[60%]'>
                <div className='w-[47%] p-3 flex flex-col gap-3 items-center'>
                    <img className='w-[90px] h-[90px] object-contain' src={time} alt=""/>
                    <div className='flex items-center flex-col gap-2'>
                        <h3 className='flex gap-1 items-end'><span
                            className='font-semibold text-[32px] leading-[36px]'>4</span><span
                            className='font-semibold text-[18px] text-[#393939]'>yil</span></h3>
                        <span className='text-[15px] text-center font-bold text-[#393939]'>Bozordagi ish o'rinlari</span>
                    </div>
                </div>
                <div className='w-[47%] p-3 flex flex-col gap-3 items-center'>
                    <img className='w-[90px] h-[90px] object-contain' src={books} alt=""/>
                    <div className='flex items-center flex-col gap-2'>
                        <h3 className='flex gap-1 items-end'><span
                            className='font-semibold text-[32px] leading-[36px] text-[#393939]'>85+</span></h3>
                        <span className='text-[15px] text-center font-bold'>O'quv dasturlari</span>
                    </div>
                </div>
                <div className='w-[47%] p-3 flex flex-col gap-3 items-center'>
                    <img className='w-[90px] h-[90px] object-contain' src={diagnostic} alt=""/>
                    <div className='flex items-center flex-col gap-2'>
                        <h3 className='flex gap-1 items-end'><span
                            className='font-semibold text-[32px] leading-[36px] text-[#393939]'>90%</span></h3>
                        <span className='text-[15px] text-center font-bold text-[#393939]'>To'liq grant olish imkoniyati</span>
                    </div>
                </div>
                <div className='w-[47%] p-3 flex flex-col gap-3 items-center'>
                    <img className='w-[90px] h-[90px] object-contain' src={filials} alt=""/>
                    <div className='flex items-center flex-col gap-2'>
                        <h3 className='flex gap-1 items-end'><span
                            className='font-semibold text-[32px] leading-[36px] text-[#393939]'>2</span></h3>
                        <span className='text-[15px] text-center font-bold text-[#393939]'>O'zbekistonda faoliyat yuritayotgan filiallar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InChinaNumbers2
