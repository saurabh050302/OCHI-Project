import React from 'react'
import Button from './Button'

function About() {
    return (
        <div data-scroll data-scroll-speed='0.3' className=' relative -top-40 z-20'>
            <div className='w-full p-20 bg-[#CDEA68] rounded-t-2xl'>
                <p className=' pr-[10vw] text-[3.5vw] text-black leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
            </div>
            <div className=' w-full px-20 py-10 border-t-[1px] border-zinc-500 bg-[#CDEA68] flex'>
                <div className=' w-1/2'>
                    <h1 className=' text-5xl text-zinc-800 mb-4'>Our approach:</h1>
                    <Button text={"Read More"} />
                </div>
                <div className=' w-1/2 h-[70vh] rounded-3xl bg-[#bee246]'></div>
            </div>
        </div>
    )
}

export default About
