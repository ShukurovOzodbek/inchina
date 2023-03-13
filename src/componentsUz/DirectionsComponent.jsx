import React from 'react'

const DirectionsComponent2 = ({ img, direction, text, display }) => {
    return (
        <div className={`flex gap-6 w-full items-start justify-center lg:w-[46%] ${display} lg:flex`}>
            <img className='object-contain w-[70px] lg:w-[100px]' src={img} alt="" />
            <div className='flex flex-col gap-1'>
                <h3 className='way text-[18px] font-[900] md:text-[25px] upp1ercase xl:text-[28px]'>{direction}</h3>
                <p className='raleway text-[14px] md:text-[16px] xl:text-[22px]'>{text}</p>
            </div>
        </div>
    )
}

export default DirectionsComponent2
