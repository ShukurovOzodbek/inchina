import React from 'react'

const DirectionsComponent = ({ img, direction, text, display }) => {
    return (
        <div className={`flex gap-6 w-full items-start lg:w-[46%] ${display} lg:flex`}>
            <img className='object-contain w-[70px]' src={img} alt="" />
            <div className='flex flex-col gap-1'>
                <h3 className='way text-[18px] font-[900] md:text-[22px] uppercase'>{direction}</h3>
                <p className='raleway text-[14px]'>{text}</p>
            </div>
        </div>
    )
}

export default DirectionsComponent
