import React from 'react'

function Button({ text }) {
    return (
        <div>
            <button className='px-6 py-3 text-lg bg-zinc-800 rounded-full uppercase flex items-center gap-5'>
                {text}
                <span className=' h-4 w-4 bg-zinc-100 rounded-full'></span>
            </button>
        </div>
    )
}

export default Button
