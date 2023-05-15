import React from "react";
import IGImg1 from '../public/images/IGimg1.jpg';
import IGImg2 from '../public/images/IGimg2.jpg';
import IGImg3 from '../public/images/IGimg3.jpg';
import IGImg5 from '../public/images/IGimg5.jpg';
import IGImg6 from '../public/images/IGimg6.jpg';
import IGImg7 from '../public/images/IGimg7.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () =>{
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">
        <p className="text-white text-3xl font-bold">Follow me on Instagram</p>
        <p className="pb-4 text-white">@Nikko</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
            <InstagramImg socialImg={IGImg1}/>
            <InstagramImg socialImg={IGImg2}/>
            <InstagramImg socialImg={IGImg3}/>
            <InstagramImg socialImg={IGImg5}/>
            <InstagramImg socialImg={IGImg6}/>
            <InstagramImg socialImg={IGImg7}/>
        </div>
        </div>
    )
}

export default Instagram