import React from 'react'

const WhyChina = () => {
    const modalOpen = () => {
        let modal = document.querySelector('.transition-class')
        modal.style.display = 'flex'
        modal.style.opacity = '1'
    }
    return (
        <div className='w-full p-5 relative md:flex items-center justify-center md:py-10 md:whyChina lg:py-[120px]' id='whyChina'>
            <div className="w-full p-10 flex bg-back md:w-[76%] lg:w-[60%] flex-col items-center objectfit-contain gap-6 relative rounded-3xl bg-[#EEEEEE]">
                <h2 className='text-[23px] font-bold uppercase md:text-[30px] lg:text-[40px]'>почему в китай?</h2>
                <div className='flex flex-col gap-6'>
                    <p className='way text-[13px] font-[500] md:text-[15px]'>Китай вот уже последние 10 лет является самой быстрорастущей экономикой мира. Тут развито всё - медицина, уровень жизни, инфраструктура, туризм и конечно же <b>образование.</b></p>
                    <p className='way text-[13px] font-[500] md:text-[15px]'>Более 100+ университетов Китая на данный момент находятся в рейтинге лучших 1000 ВУЗов мира по мнению QS. Дипломы всех этих ВУЗов свободно котируются на международном рынке труда включая Узбекистан.</p>
                </div>
                <button onClick={modalOpen} className='w-[85%] rounded-full bg-[#6B941A] text-white text-[12px] cursor-pointer font-semibold uppercase raleway p-4'>бесплатная консультация</button>
            </div>
        </div>
    )
}

export default WhyChina
