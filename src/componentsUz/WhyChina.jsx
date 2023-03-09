import React from 'react'

const WhyChina2 = () => {
    const modalOpen = () => {
        let modal = document.querySelector('.transition-class')
        modal.style.display = 'flex'
        modal.style.opacity = '1'
    }
    return (
        <div className='w-full p-5 relative md:flex items-center justify-center md:py-10 md:whyChina lg:py-[120px]' id='whyChina'>
            <div className="w-full p-10 flex bg-back md:w-[76%] lg:w-[46%] flex-col items-center objectfit-contain gap-6 relative rounded-3xl bg-[#EEEEEE]">
                <h2 className='text-[23px] font-bold uppercase md:text-[30px] lg:text-[40px]'>nega xitoy?</h2>
                <div className='flex flex-col gap-6'>
                    <p className='way text-[13px] font-[500] md:text-[15px]'>Xitoy so'nggi 10 yil ichida dunyodagi eng tez rivojlanayotgan iqtisodiyot bo'ldi. Bu yerda hamma narsa rivojlangan - tibbiyot, turmush darajasi, infratuzilma, turizm va, albatta <b>ta'lim.</b></p>
                    <p className='way text-[13px] font-[500] md:text-[15px]'>QS ma'lumotlariga ko'ra, Xitoyning 100 dan ortiq universitetlari hozirda dunyodagi eng yaxshi 1000 ta universitetlar qatoriga kiradi. Bu barcha universitetlarning diplomlari xalqaro mehnat bozorida, jumladan, O‘zbekistonda ham erkin ko‘rsatilgan.</p>
                </div>
                <button onClick={modalOpen} className='w-[65%] rounded-full bg-[#6B941A] text-white text-[12px] cursor-pointer font-semibold uppercase raleway p-4'>Bepul konsultatsiya</button>
            </div>
        </div>
    )
}

export default WhyChina2
