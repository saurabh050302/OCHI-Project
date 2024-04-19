import React, { useEffect, useState } from 'react'

function Eyes() {

    const [angle, setAngle] = useState(0);
    const [eyeDistance, setEyeDistance] = useState(0);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const maxDistance = Math.sqrt(x * x + y * y);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            var deltaY = e.clientY - y;
            var deltaX = e.clientX - x;

            var ang = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setAngle(ang - 180);

            var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            var newEyeDistance = (distance / maxDistance) * 70;
            setEyeDistance(newEyeDistance);
        })
    })

    return (
        <div data-scroll data-scroll-speed='-0.7' className='eyes w-full h-screen relative -top-72 z-10'>
            <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center flex gap-10 justify-center items-center'>

                {['leftEye', 'rightEye'].map(() => (
                    <div className=' w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div className=' w-2/3 h-2/3 rounded-full bg-zinc-800 relative'>
                            <div className='line w-full h-8 absolute top-1/2 left-1/2 flex justify-center items-center' style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }}>
                                <div className='w-8 h-8 rounded-full bg-zinc-100' style={{ marginRight: `${40 + eyeDistance}px` }}></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default Eyes
