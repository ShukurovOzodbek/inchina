import React, {useContext, useState} from 'react'
import sticker from '../assets/sticker.png'
import china_text from '../assets/china_text.png'
import axios from "axios";
import {thankContext} from "../contexts/thank";

export const ConsultModal2 = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const { setThankUz } = useContext(thankContext)

    const TOKEN = '6298482936:AAE6H77aXRQOA7aKzN9TITvDjk-Ny2WlNt4'
    const CHAT_ID = 2117950066
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


    const handleSubmit = (e) => {
        e.preventDefault()
        const inform = {
            name, phoneNumber: +phoneNumber
        }
        console.log(inform);
        localStorage.setItem('userObj', JSON.stringify(inform))

        let message = `<b>Zayavka</b>\n`;
        message += `<b>Ism: ${name} </b>\n`
        message += `<b>Telefon raqami: +998 ${+phoneNumber} </b>`


        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        }).then((res) => setThankUz(true))


    }
    const modalClose = () => {
        let modal = document.querySelector('.transition-class')
        modal.style.opacity = '0'
        modal.style.display = 'none'
    }
    return (
        <div
            className='w-full h-[100vh] bg-b fixed z-[100] top-0 flex items-center justify-center hidden opacity-0 transition-class'>
            <div
                className='w-[98%] md:w-[60%] lg:w-[500px] rounded-xl relative left-[1%] bg-white p-7 pt-10 flex flex-col gap-4 items-center'>
                <svg onClick={modalClose} className={'absolute right-0 top-[-50px] cursor-pointer'}
                     xmlns="http://www.w3.org/2000/svg" fill={'#ffffff'} viewBox="0 0 50 50" width="30px" height="30px">
                    <path
                        d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/>
                </svg>
                <h2 className='uppercase text-[27px] text-center font-[900]'>
                    So'rov qoldiring</h2>
                <p className='text-center text-[#747474] text-[15.8px] way font-[500] leading-[18px]'>Bizning
                    menejerimiz siz bilan bog'lanadi va barcha savollaringizga javob beradi
                </p>
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 mt-5 items-center'>
                    <input onChange={(e) => setName(e.target.value)} type="text"
                           className="bg-gray-50 border text-black p-[12px] pl-[15px] way text-[16px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                           placeholder="Ismingiz" required/>
                    <div className="flex w-full">
                                    <span
                                        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                                        +998
                                    </span>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} type="number"
                               class="bg-gray-50 border text-black p-[12px] pl-[15px] way text-[16px] border-gray-300 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                               placeholder="(99) 999-99-99"/>
                    </div>
                    <button type='submit'
                            className='w-full rounded-lg bg-[#6B941A] text-white text-[12px] cursor-pointer font-semibold uppercase raleway p-4'>bepul
                        konsultatsiya
                    </button>
                </form>
                {/*</>*/}
                {/*}*/}
            </div>
        </div>
    )
}