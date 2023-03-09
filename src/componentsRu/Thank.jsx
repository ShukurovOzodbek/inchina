import sticker from '../assets/sticker.png'
import china_text from '../assets/china_text.png'
import React, {useEffect, useState} from "react";
import Footer from "./Footer";
const Thank = () => {
    const [userObj, setUserObj] = useState({})
    useEffect(() => {
        setUserObj(JSON.parse(localStorage.getItem('userObj')))
    }, [])

    return (
        <div>
            <div className={'relative w-full p-20'}>
                <h2 className='uppercase text-[27px] text-[#4F750E] text-center font-[900]'>СПАСИБО!</h2>
                <p className='text-center text-[#747474] text-[15.8px] way font-[500] leading-[18px]'>{userObj.name},
                    Ваша заявка принята! в ближайшее время вам перезвонят и проведут бесплатную
                    консультацию </p>
                <div className='w-full flex flex-col items-center justify-center'>
                    <img src={sticker} alt=""/>
                    <img className='absolute bottom-0 left-0' src={china_text} alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Thank