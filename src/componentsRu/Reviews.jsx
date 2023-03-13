import React, {useEffect, useState} from 'react'
import coin from '../assets/coin.png'
import video from '../assets/video.mp4'
import {Keyboard, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import '../style.css'

const Reviews = () => {
    const [slides, setSlides] = useState(3)
    useEffect(() => {
        if (window.innerWidth < 1200 && window.innerWidth > 500) {
            setSlides(2)
        } else if (window.innerWidth < 500) {
            setSlides(1)
        }
    }, [window.innerWidth])

    const handleVideoPlay = (e) => {
        e.target.previousSibling.play()
        e.target.parentNode.style.padding = "0px"
        e.target.parentNode.style.border = "none"
        e.target.style.display = 'none'
    }

    const handleVideoPause = (e) => {
        e.target.pause()
        e.target.nextSibling.style.display = 'block'
        e.target.parentNode.style.padding = "0.75rem"
        e.target.parentNode.style.border = "5px solid #4F750E"
    }

    return (
        <div className='p-5 pt-10 relative h-[700px] lg:h-[800px] border-dashed pb-14 border-b-[3px] border-b-[#747474]'
             id='reviews'>
            <h2 className='uppercase text-[26px] md:text-[30px] text-center font-[900] lg:text-[40px]'><span
                className='text-[#B10A17]'>ОТЗЫВЫ</span> СТУДЕНТОВ</h2>
            <div
                className='md:w-[76%] absolute lg:w-[63%] md:m-auto right-0 left-0 top-[120px] lg:top-[170px] scroll px-5 flex gap-[70px] items-center justify-between pb-10'>
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
                    <SwiperSlide>
                        <div className='flex gap-4 items-center justify-center flex-col min-w-[300px] lg:max-w-[300px]'>
                            <div
                                className='relative w-[250px] h-[250px] lg:w-[220px] lg:h-[220px] md:lg:w-[220px] md:h-[220px] flex items-center justify-center p-3 overflow-hidden border-[5px] border-solid rounded-full border-[#4F750E]'>
                                <video className={'w-full h-full rounded-full'} onClick={handleVideoPause}
                                       src={video}></video>
                                <svg onClick={handleVideoPlay} className={'absolute cursor-pointer'} width="46"
                                     height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.25 22.1029C44.25 23.8349 44.25 28.1651 41.25 29.8971L9.74999 48.0837C6.75 49.8157 3 47.6506 3 44.1865L3 7.81345C3 4.34936 6.74999 2.1843 9.75 3.91635L41.25 22.1029Z"
                                        stroke="white" stroke-opacity="0.62" stroke-width="5"/>
                                </svg>
                            </div>
                            <h3 className='uppercase font-bold way lg:text-[22px] md:text-[24px]'>Мардиев Алишер</h3>
                            <p className='text-center way lg:text-[14px] md:text-[14px]'>Наша команда целиком и
                                полностью состоит из
                                выпускников Китайский ВУЗов, поэтому мы точно знаем про все ньюансы студенческой жизни в
                                Китае</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-4 items-center justify-center flex-col min-w-[300px] lg:max-w-[300px]'>
                            <div
                                className='relative w-[250px] h-[250px] lg:w-[220px] lg:h-[220px] md:lg:w-[220px] md:h-[220px] flex items-center justify-center p-3 overflow-hidden border-[5px] border-solid rounded-full border-[#4F750E]'>
                                <video className={'w-full h-full rounded-full'} onClick={handleVideoPause}
                                       src={video}></video>
                                <svg onClick={handleVideoPlay} className={'absolute cursor-pointer'} width="46"
                                     height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.25 22.1029C44.25 23.8349 44.25 28.1651 41.25 29.8971L9.74999 48.0837C6.75 49.8157 3 47.6506 3 44.1865L3 7.81345C3 4.34936 6.74999 2.1843 9.75 3.91635L41.25 22.1029Z"
                                        stroke="white" stroke-opacity="0.62" stroke-width="5"/>
                                </svg>
                            </div>
                            <h3 className='uppercase font-bold way lg:text-[22px] md:text-[24px]'>Мардиев Алишер</h3>
                            <p className='text-center way lg:text-[14px] md:text-[14px]'>Наша команда целиком и
                                полностью состоит из
                                выпускников Китайский ВУЗов, поэтому мы точно знаем про все ньюансы студенческой жизни в
                                Китае</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-4 items-center justify-center flex-col min-w-[300px] lg:max-w-[300px]'>
                            <div
                                className='relative w-[250px] h-[250px] lg:w-[220px] lg:h-[220px] md:lg:w-[220px] md:h-[220px] flex items-center justify-center p-3 overflow-hidden border-[5px] border-solid rounded-full border-[#4F750E]'>
                                <video className={'w-full h-full rounded-full'} onClick={handleVideoPause}
                                       src={video}></video>
                                <svg onClick={handleVideoPlay} className={'absolute cursor-pointer'} width="46"
                                     height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.25 22.1029C44.25 23.8349 44.25 28.1651 41.25 29.8971L9.74999 48.0837C6.75 49.8157 3 47.6506 3 44.1865L3 7.81345C3 4.34936 6.74999 2.1843 9.75 3.91635L41.25 22.1029Z"
                                        stroke="white" stroke-opacity="0.62" stroke-width="5"/>
                                </svg>
                            </div>
                            <h3 className='uppercase font-bold way lg:text-[22px] md:text-[24px]'>Мардиев Алишер</h3>
                            <p className='text-center way lg:text-[14px] md:text-[14px]'>Наша команда целиком и
                                полностью состоит из
                                выпускников Китайский ВУЗов, поэтому мы точно знаем про все ньюансы студенческой жизни в
                                Китае</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-4 items-center justify-center flex-col min-w-[300px] lg:max-w-[300px]'>
                            <div
                                className='relative w-[250px] h-[250px] lg:w-[220px] lg:h-[220px] md:lg:w-[220px] md:h-[220px] flex items-center justify-center p-3 overflow-hidden border-[5px] border-solid rounded-full border-[#4F750E]'>
                                <video className={'w-full h-full rounded-full'} onClick={handleVideoPause}
                                       src={video}></video>
                                <svg onClick={handleVideoPlay} className={'absolute cursor-pointer'} width="46"
                                     height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.25 22.1029C44.25 23.8349 44.25 28.1651 41.25 29.8971L9.74999 48.0837C6.75 49.8157 3 47.6506 3 44.1865L3 7.81345C3 4.34936 6.74999 2.1843 9.75 3.91635L41.25 22.1029Z"
                                        stroke="white" stroke-opacity="0.62" stroke-width="5"/>
                                </svg>
                            </div>
                            <h3 className='uppercase font-bold way lg:text-[22px] md:text-[24px]'>Мардиев Алишер</h3>
                            <p className='text-center way lg:text-[14px] md:text-[14px]'>Наша команда целиком и
                                полностью состоит из
                                выпускников Китайский ВУЗов, поэтому мы точно знаем про все ньюансы студенческой жизни в
                                Китае</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex gap-4 items-center justify-center flex-col min-w-[300px] lg:max-w-[300px]'>
                            <div
                                className='relative w-[250px] h-[250px] lg:w-[220px] lg:h-[220px] md:lg:w-[220px] md:h-[220px] flex items-center justify-center p-3 overflow-hidden border-[5px] border-solid rounded-full border-[#4F750E]'>
                                <video className={'w-full h-full rounded-full'} onClick={handleVideoPause}
                                       src={video}></video>
                                <svg onClick={handleVideoPlay} className={'absolute cursor-pointer'} width="46"
                                     height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.25 22.1029C44.25 23.8349 44.25 28.1651 41.25 29.8971L9.74999 48.0837C6.75 49.8157 3 47.6506 3 44.1865L3 7.81345C3 4.34936 6.74999 2.1843 9.75 3.91635L41.25 22.1029Z"
                                        stroke="white" stroke-opacity="0.62" stroke-width="5"/>
                                </svg>
                            </div>
                            <h3 className='uppercase font-bold way lg:text-[22px] md:text-[24px]'>Мардиев Алишер</h3>
                            <p className='text-center way lg:text-[14px] md:text-[14px]'>Наша команда целиком и
                                полностью состоит из
                                выпускников Китайский ВУЗов, поэтому мы точно знаем про все ньюансы студенческой жизни в
                                Китае</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <img className='absolute right-0 bottom-[-20px]' src={coin} alt=""/>
        </div>
    )
}

export default Reviews
