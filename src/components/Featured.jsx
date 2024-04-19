import React from 'react'
import ProjectTitle from './ProjectTitle'
import Button from './Button'

function Featured() {
    return (
        <div className=' relative z-20 bg-zinc-900'>
            <div className='pt-20 pb-12 px-10 text-7xl'>Featured projects</div>

            <div className=' border-t-2 border-zinc-700'></div>

            <div className=' p-10 flex justify-center items-center flex-wrap'>
                {["Aaaaa", "Bbbbb", "Ccccc", "Ddddd"].map((item, index) => (
                    <div className='m-5'>
                        <ProjectTitle props={{ item, index }} />
                    </div>
                ))}
            </div>

            <div className=' py-10 flex justify-center items-center border-b-2 border-zinc-700'>
                <Button text={"view all case studies"} />
            </div>
        </div>
    )
}

export default Featured
