import React, {useEffect, useState} from 'react'
import coin from '../assets/coin.png'
import {Keyboard, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import '../style.css'

const Reviews2 = () => {
    const [slides, setSlides] = useState(3)
    useEffect(() => {
        if (window.innerWidth < 1200 && window.innerWidth > 500) {
            setSlides(2)
        }else if (window.innerWidth < 500) {
            setSlides(1)
        }
    }, [window.innerWidth])
    return (
        <div className='p-5 pt-10 relative h-[700px] lg:h-[800px] border-dashed pb-14 border-b-[3px] border-b-[#747474]' id='reviews'>
            <h2 className='uppercase text-[26px] md:text-[30px] text-center font-[900] lg:text-[40px]'><span className='text-[#B10A17]'>Talabalar </span>sharhlari</h2>
            <div className='md:w-[76%] absolute lg:w-[60%] md:m-auto right-0 left-0 top-[120px] lg:top-[170px] scroll px-5 flex gap-[70px] items-center justify-between pb-10'>
                <Swiper
                    slidesPerView={slides}
                    spaceBetween={40}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper2"
                >
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex gap-4 min-w-[250px] items-center justify-center flex-col'>
                            <div className='w-[250px] h-[250px] flex items-center justify-center p-4 border-[5px] border-solid rounded-full border-[#4F750E]'>
                            </div>
                            <h3 className='uppercase font-bold way text-[24px]'>Mardiev Alisher</h3>
                            <p className='text-center way'>
                                Bizning jamoamiz to'liq tarkibdan iborat
                                Xitoy universitetlari bitiruvchilari, shuning uchun biz Xitoyda talaba hayotining barcha nuanslari haqida aniq bilamiz</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <img className='absolute right-0 bottom-[-20px]' src={coin} alt="" />
        </div>
    )
}

export default Reviews2
