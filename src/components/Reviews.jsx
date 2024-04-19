import React from 'react'

function Reviews() {
    return (
        <div className=' px-10 py-20 flex gap-5 justify-between items-center'>

            {["Aaaaa", "Bbbbb", "Ccccc"].map((item, index) => (
                <div className={` relative p-4 h-[60vh] rounded-xl ${index == 0 ? 'w-1/2' : 'w-1/4'} bg-pink-600 flex justify-center items-center`}>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <div className='absolute px-4 py-1 left-10 bottom-10 border-2 border-zinc-200 rounded-full'>{item}</div>
                </div>
            ))}

        </div>
    )
}

export default Reviews
