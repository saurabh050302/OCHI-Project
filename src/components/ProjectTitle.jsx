import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Power4 } from 'gsap'

function ProjectTitle({ props }) {

    const [hover, setHover] = useState(false);

    return (

        <>
            <div className='flex gap-2 items-center'>
                <div className=' w-4 h-4 rounded-full bg-zinc-300'></div>
                {props.item}
            </div>

            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='group my-5 w-[40vw] h-[40vw] flex justify-center items-center'>

                <div className='w-full h-full group-hover:w-[38vw] group-hover:h-[38vw]  duration-500 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center rounded-xl flex justify-center items-center relative' >

                    <img className=' w-[20vw] h-[20vw] group-hover:w-[23vw] group-hover:h-[23vw] duration-500 rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

                    <h1 className={`absolute text-9xl z-10 text-yellow-300 ${props.index % 2 == 0 ? 'left-full -translate-x-1/2 ' : 'right-[100%] translate-x-1/2'} flex overflow-hidden`} >
                        {props.item.split('').map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={hover ? ({ y: 0 }) : ({ y: "100%" })}
                                transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.02 }}
                                className='inline-block uppercase font-bold'>
                                {item}
                            </motion.span>))}
                    </h1>

                </div>
            </div>

            <div className='flex gap-2 justify-start items-center'>
                {["abba", "babba", "chabba", "dabba"].map((item, index) => (
                    <div className=' px-4 py-1 border-2 border-zinc-300 rounded-full'>{item}</div>
                ))}
            </div>
        </>
    )
}

export default ProjectTitle
