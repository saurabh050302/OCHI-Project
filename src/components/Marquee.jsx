import React from 'react'
import { motion } from "framer-motion"

function Marquee() {

    return (
        <div className='relative z-10 w-full py-16 bg-[#004D43] rounded-t-2xl'>
            <div className='border-t-2 border-b-2 border-zinc-300 pb-5 flex overflow-hidden whitespace-nowrap text-[17vw] uppercase leading-none font-bold tracking-tighter'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='pr-12'>we are ochi</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='pr-12'>we are ochi</motion.h1>
            </div>
        </div >
    )
}

export default Marquee
