import Footer2 from "./Footer";
import sticker from '../assets/sticker.png'
import china_text from '../assets/china_text.png'
import React, {useEffect, useState} from "react";
const Thank2 = () => {
    const [userObj, setUserObj] = useState({})
    useEffect(() => {
        setUserObj(JSON.parse(localStorage.getItem('userObj')))
    }, [])

    return (
        <div>
            <div className={'relative w-full p-20'}>
                <h2 className='uppercase text-[37px] text-[#4F750E] text-center font-[900]'>Rahmat!</h2>
                <p className='text-center text-[#747474] text-[17.8px] way font-[500] leading-[18px]'>{userObj?.name},
                    Sizning arizangiz qabul qilindi! Tez orada bepul maslahat olish uchun siz bilan bog'lanamiz.
                </p>
                <div className='w-full flex flex-col items-center justify-center'>
                    <img className={'w-[200px]'} src={sticker} alt=""/>
                    <img className='absolute bottom-0 left-0' src={china_text} alt=""/>
                </div>
            </div>
            <Footer2/>
        </div>
    )
}

export default Thank2