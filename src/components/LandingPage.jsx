import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs"
import { motion } from 'framer-motion'


function LandingPage() {
    return (
        <div data-scroll data-scroll-speed='-0.3' className=' z-20 w-full h-screen pt-2'>
            <div className='textstructure mt-14 p-20 '>
                {["We create", "eye opening", "presentations"].map((item, index) => (
                    <div className='masker flex items-center' index={index}>
                        {index == 1 &&
                            <motion.div initial={{ width: 0 }} animate={{ width: "7rem" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] h-[4.5rem] rounded-md relative top-1'>
                            </motion.div>}
                        <h1 className='uppercase text-8xl leading-[6vw] tracking-tighter font-bold'>{item}</h1>
                    </div>
                ))}
            </div>
            <div className=' border-t-2 border-zinc-800 mt-8 px-16 py-6 flex justify-between items-center'>
                {["For public and private companies", "From the first pitch to IPO", "Start the project"].map((item, index) => {
                    return index == 2 ? <div className='flex gap-2 items-center'>
                        <button className=' px-4 py-1 border-2 border-zinc-700 rounded-3xl hover:bg-zinc-800'>{item}</button>
                        <BsArrowUpRightCircle className=' text-white text-3xl hover:text-zinc-300 ' />
                    </div> : <p>{item}</p>
                })}
            </div>
        </div>
    )
}

export default LandingPage
