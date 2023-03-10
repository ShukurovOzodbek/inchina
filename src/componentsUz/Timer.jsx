import React, {useContext, useEffect, useState} from 'react'
import city from '../assets/city.png'
import axios from "axios";
import {thankContext} from "../contexts/thank";

const Timer2 = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    useEffect(() => {
        const day = document.querySelector('#day')
        const hour = document.querySelector('#hour')
        const min = document.querySelector('#min')

        const endDay = new Date('Dec 1, 2023    , 02:00:00').getTime()

        setInterval(() => {
            const now = new Date().getTime()
            const prom = endDay - now

            day.innerHTML = Math.floor(prom / (1000 * 60 * 60 * 24))
            hour.innerHTML = Math.floor((prom % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            min.innerHTML = Math.floor((prom % (1000 * 60 * 60)) / (1000 * 60))
        });
    }, [])
    const TOKEN = '6298482936:AAE6H77aXRQOA7aKzN9TITvDjk-Ny2WlNt4'
    const CHAT_ID = 2117950066
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    const { setThankUz } = useContext(thankContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const inform = {
            name, phoneNumber: +phoneNumber
        }
        console.log(inform);
        localStorage.setItem('userObj', JSON.stringify(inform))

        let message = `<b>Заявка</b>\n`;
        message += `<b>Ismi: ${name} </b>\n`
        message += `<b>Telefon raqami: +998 ${+phoneNumber} </b>`


        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        }).then((res) => setThankUz(true))

    }

    return (
        <div className='py-20 relative min-h-[550px] bg-image md:flex items-center justify-center'>
            <div className='md:w-[76%] text-white flex flex-col gap-4 items-center text-center top-20 right-0 lg:py-[70px]'>
                <h2 className='uppercase text-[27px] text-center font-[900] md:text-[30px] lg:text-[40px]'>MAVSUM OXIRIGAcha:</h2>
                <div className='w-full lg:w-[500px] flex flex-col items-center gap-10 lg:w-[50%]'>
                    <div className='w-[90%] bg-[#1E1E1E] rounded-2xl justify-between p-5 px-[70px] px-[40px] flex items-start'>
                        <div className='flex flex-col items-center'>
                            <h3 id="day" className='text-[30px] font-bold'>25</h3>
                            <span className='way'>Kun</span>
                        </div>
                        <h2 className=' text-[27px] font-bold'>:</h2>
                        <div className='flex flex-col items-center'>
                            <h3 id="hour" className='text-[30px] font-bold'>25</h3>
                            <span className='way'>Soat</span>
                        </div>
                        <h2 className=' text-[27px] font-bold'>:</h2>
                        <div className='flex flex-col items-center'>
                            <h3 id="min" className='text-[30px] font-bold'>25</h3>
                            <span className='way'>Daqiqa</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-4 items-center' action="">
                        <input onChange={(e) => setName(e.target.value)} type="text" className="bg-gray-50 border text-black p-[15px] text-[20px] pl-[33px] way border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Ismingiz" required />
                        <input onChange={(e) => setPhoneNumber(e.target.value)} type="number" className="bg-gray-50 border text-black p-[15px] text-[20px] pl-[33px] way border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Telefon raqmingiz (+998 937777777)" required />
                        <button className='w-[90%] lg:w-full rounded-full lg:rounded-lg lg:text-[19px] bg-[#6B941A] text-white cursor-pointer font-semibold uppercase raleway p-4'>Bepul Konsultatsiya</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Timer2
