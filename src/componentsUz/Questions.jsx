import React, {useState} from 'react'
import p325 from '../assets/p325.png'
import plus from '../assets/plus.png'
import sticker2 from '../assets/sticker2.png'

const Questions2 = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const [showAnswer2, setShowAnswer2] = useState(false)
    const [showAnswer3, setShowAnswer3] = useState(false)
    const [showAnswer4, setShowAnswer4] = useState(false)
    return (
        <div
            className='w-full relative min-h-[300px] lg:min-h-[700px] flex flex-col items-center justify-center gap-[30px] p-6 pb-[50px]'
            id='questions'>
            <img className='absolute top-[-210px] left-0' src={p325} alt=""/>
            <h2 className='uppercase text-[24px] md:text-[30px] mt-4 font-bold text-center lg:text-[40px] mb-[20px]'>Ko'p beriladigan savollar</h2>
            <div className='w-full flex gap-[7px] md:w-[76%] lg:w-[60%] justify-between items-start'>
                <div className={'w-full flex flex-col gap-[7px] md:w-full lg:w-[50%]'}>
                    <div className={`rounded-[17px] overflow-hidden ${showAnswer ? "h-auto" : "h-[90px]"} flex flex-col gap-6 justify-between items-start bg-man p-5`}>
                        <div className={'flex w-full justify-between'}>
                            <p className='way text-[14px] font-semibold md:text-[16px]'>
                                Xitoyga borish uchun qanaqa hujjatlar kerak?</p>
                            <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                                <img onClick={() => setShowAnswer(true)} className={`w-[30px] ${showAnswer ? 'hidden' : "block"}`} src={plus} alt=""/>
                                <img onClick={() => setShowAnswer(false)} className={`w-[30px] ${showAnswer ? 'block' : "hidden"}`} src={plus} alt=""/>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, est eum expedita fugit
                            labore natus nesciunt nostrum quidem, quisquam repellendus sed suscipit tenetur unde.
                            Commodi consequatur delectus, dolores, ea eligendi et fuga magni odio, qui quidem quod
                            repellendus sapiente unde!
                        </p>
                    </div>
                    <div className={`rounded-[17px] overflow-hidden ${showAnswer2 ? "h-auto" : "h-[90px]"} flex flex-col gap-6 justify-between items-start bg-man p-5`}>
                        <div className={'flex w-full justify-between'}>
                            <p className='way text-[14px] font-semibold md:text-[16px]'>
                                Xitoyga borish uchun qanaqa hujjatlar kerak?</p>
                            <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                                <img onClick={() => setShowAnswer2(true)} className={`w-[30px] ${showAnswer2 ? 'hidden' : "block"}`} src={plus} alt=""/>
                                <img onClick={() => setShowAnswer2(false)} className={`w-[30px] ${showAnswer2 ? 'block' : "hidden"}`} src={plus} alt=""/>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, est eum expedita fugit
                            labore natus nesciunt nostrum quidem, quisquam repellendus sed suscipit tenetur unde.
                            Commodi consequatur delectus, dolores, ea eligendi et fuga magni odio, qui quidem quod
                            repellendus sapiente unde!
                        </p>
                    </div>
                    <div className={`rounded-[17px] overflow-hidden ${showAnswer3 ? "h-auto" : "h-[90px]"} flex flex-col gap-6 justify-between items-start bg-man p-5`}>
                        <div className={'flex w-full justify-between'}>
                            <p className='way text-[14px] font-semibold md:text-[16px]'>
                                Xitoyga borish uchun qanaqa hujjatlar kerak?</p>
                            <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                                <img onClick={() => setShowAnswer3(true)} className={`w-[30px] ${showAnswer3 ? 'hidden' : "block"}`} src={plus} alt=""/>
                                <img onClick={() => setShowAnswer3(false)} className={`w-[30px] ${showAnswer3 ? 'block' : "hidden"}`} src={plus} alt=""/>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, est eum expedita fugit
                            labore natus nesciunt nostrum quidem, quisquam repellendus sed suscipit tenetur unde.
                            Commodi consequatur delectus, dolores, ea eligendi et fuga magni odio, qui quidem quod
                            repellendus sapiente unde!
                        </p>
                    </div>
                    <div className={`rounded-[17px] overflow-hidden ${showAnswer4 ? "h-auto" : "h-[90px]"} flex flex-col gap-6 justify-between items-start bg-man p-5`}>
                        <div className={'flex w-full justify-between'}>
                            <p className='way text-[14px] font-semibold md:text-[16px]'>
                                Xitoyga borish uchun qanaqa hujjatlar kerak?</p>
                            <div className='bg-[#CDCDCD] flex p-[13px] rounded-full cursor-pointer'>
                                <img onClick={() => setShowAnswer4(true)} className={`w-[30px] ${showAnswer4 ? 'hidden' : "block"}`} src={plus} alt=""/>
                                <img onClick={() => setShowAnswer4(false)} className={`w-[30px] ${showAnswer4 ? 'block' : "hidden"}`} src={plus} alt=""/>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, est eum expedita fugit
                            labore natus nesciunt nostrum quidem, quisquam repellendus sed suscipit tenetur unde.
                            Commodi consequatur delectus, dolores, ea eligendi et fuga magni odio, qui quidem quod
                            repellendus sapiente unde!
                        </p>
                    </div>
                </div>
                <img className={'hidden lg:block w-[350px] object-cover'} src={sticker2} alt=""/>
            </div>
        </div>
    )
}

export default Questions2
