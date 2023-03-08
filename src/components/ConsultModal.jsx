import React, { useState } from 'react'
import sticker from '../assets/sticker.png'
import china_text from '../assets/china_text.png'

export const ConsultModal = () => {
    const [submited, setSubmited] = useState(false)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const inform = {
            name, phoneNumber: +phoneNumber
        }
        console.log(inform);
        setSubmited(true)
    }

    return (
        <div className='w-full h-[100vh] bg-b fixed z-[100] top-0 flex items-center justify-center hidden opacity-0 transition-class'>
            <div className='w-[98%] md:w-[60%] lg:w-[50%] rounded-xl relative left-[1%] bg-white p-7 pt-10 flex flex-col gap-4 items-center'>
                {
                    submited ?
                        <>
                            <h2 className='uppercase text-[27px] text-[#4F750E] text-center font-[900]'>СПАСИБО!</h2>
                            <p className='text-center text-[#747474] text-[15.8px] way font-[500] leading-[18px]'>{name}, Ваша заявка принята! в ближайшее время вам перезвонят и проведут бесплатную консультацию </p>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <img src={sticker} alt="" />
                                <img className='absolute bottom-0 left-0' src={china_text} alt="" />
                            </div>
                        </>
                        : <>
                            <h2 className='uppercase text-[27px] text-center font-[900]'>Оставьте заявку</h2>
                            <p className='text-center text-[#747474] text-[15.8px] way font-[500] leading-[18px]'>Наш менеджер свяжется c Вами и ответит на все ваши вопросы</p>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-5 items-center'>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="bg-gray-50 border text-black p-[12px] pl-[15px] way text-[16px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Имя" required />
                                <div className="flex w-full">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        +998
                                    </span>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} type="phone" class="bg-gray-50 border text-black p-[12px] pl-[15px] way text-[16px] border-gray-300 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="(99) 999-99-99" maxLength="14" required />
                                </div>
                                <button type='submit' className='w-full rounded-lg bg-[#6B941A] text-white text-[12px] cursor-pointer font-semibold uppercase raleway p-4'>бесплатная консультация</button>
                            </form>
                        </>
                }
            </div>
        </div>
    )
}