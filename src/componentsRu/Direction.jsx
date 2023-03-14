import React from 'react'
import flower from '../assets/flower.png'
import coins from '../assets/coins.png'
import coins2 from '../assets/coins2.png'
import DirectionsComponent from './DirectionsComponent'
import chinaFlag from '../assets/chinaFlag.png'
import masters from '../assets/masters.png'
import language from '../assets/language.png'

const Direction = () => {
    return (
        <div id="direction" className='w-full p-5 py-20 flex items-center flex-col gap-20 relative overflow-hidden lg:max-h-[800px]'>
            <h2 className='uppercase text-[25px] text-center w-full font-[900] text-[#393939] md:text-[30px] lg:text-[40px] text-[#393939]'>Наши
                направления</h2>
            <img className='absolute right-[-10px] top-[15%]' src={flower} alt=""/>
            <img className='absolute block lg:hidden right-[-10px] bottom-[-10%]' src={coins} alt=""/>
            <img className='absolute left-[-10px] bottom-[-10%] w-[120px]' src={coins2} alt=""/>
            <div className='flex flex-col lg:flex-row gap-10 md:w-[76%] lg:w-[70%] justify-center lg:flex-wrap'>
                <DirectionsComponent img={chinaFlag}
                                     text={'это первая ступень высшего образования, базовый образовательный цикл, прохождение которого дает возможность'}
                                     direction={'Бакалавр'}/>
                <DirectionsComponent img={masters}
                                     text={'дипломированный специалист может начинать трудовую деятельность либо на конкурсной основе'}
                                     direction={'Магистратура'}/>
                <DirectionsComponent img={language}
                                     text={'школа, где изучают иностранный язык. Уроки в языковой школе обычно ориентированы'}
                                     direction={'Языковые курсы'}/>
                <DirectionsComponent img={language} display={'hidden'}
                                     text={'школа, где изучают иностранный язык. Уроки в языковой школе обычно ориентированы'}
                                     direction={'Языковые курсы'}/>
            </div>
        </div>
    )
}

export default Direction
