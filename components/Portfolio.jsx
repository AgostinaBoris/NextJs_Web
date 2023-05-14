import React from "react";
import Image from "next/image";

const Portfolio = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
             <div className="w-full h-full col-span-2 md:col-span-2 row-span-2">
                <Image
                src='https://images.unsplash.com/photo-1505713379692-161f421aad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt='/'
                deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                width='677'
                height='451'
                />
             </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1610028505604-e621f1573fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
                <div className="w-full h-full">
                    <Image src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    width='300'
                    height='300'
                    deviceSizes="[640, 750, 828, 1080, 1200, 1920, 2048]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;