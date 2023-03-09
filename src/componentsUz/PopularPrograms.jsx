import React, {useEffect, useState} from 'react'
import univ from '../assets/univ.png'
import money from '../assets/money.png'
import UniversityComponent from './UniversityComponent'
import {Keyboard, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularPrograms2 = () => {
    const [slides, setSlides] = useState(3)
    useEffect(() => {
        if (window.innerWidth < 1200 && window.innerWidth > 500) {
            setSlides(2)
        }else if (window.innerWidth < 500) {
            setSlides(1)
        }
    }, [window.innerWidth])
    return (
        <div className='w-full p-5 flex flex-col md:items-center gap-6 border-dashed pb-14 border-b-[3px] border-b-[#747474]' id="popularPrograms">
            <div className='flex flex-col gap-4 pt-10'>
                <h2 className='uppercase text-[25px] font-bold text-center md:text-[30px] lg:text-[40px]'>
                    ENG MASHXUR
                     <br/> DASTURLAR</h2>
                <p className='text-center text-[#747474] text-[14px] way font-[500] md:text-[18px] lg:text-[22px]'>
                    Talabalarimiz tanlagan mashhur o'quv dasturlari va universitetlar</p>
            </div>
            <div className='scroll w-[98%] md:w-[76%] flex justify-between gap-4 lg:w-[63%]'>
                <Swiper
                    slidesPerView={slides}
                    spaceBetween={10}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper w-[100%]"
                >
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UniversityComponent univ={'NUIST (Wuxi city)'} year={'4 yil'} img={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>} img2={money} img3={univ} text={'Bakalavriat - bu oliy taʼlimning birinchi bosqichi, asosiy taʼlim sikli boʻlib, undan oʻtish imkoniyatini beradi.\n'} />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default PopularPrograms2