import React, { useState, useEffect } from 'react';
import home1 from '../assets/herobg.png'
import home2 from '../assets/home1.png'
import sommer from '../assets/sommer.png'
import { BgColor, Logo, LoginSignup, Info, Slideshow, Footer } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Main = () => {
    BgColor('#6F6F6F');

    const[isLogin, setIsLogin] = useState(true);
    const[bg, setBG] = useState(window.innerWidth < 667)

    useEffect(() => {
        AOS.init({duration: 1000});
        const handleResize = () => {
            setBG(window.innerWidth < 667)
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])


    return (
        <div className='w-full'>
            <Logo />
            <div className='relative w-full h-screen lg:h-[140vh]'>
                <p className='roboto-regular tracking-tighter text-[#EFEEED] lg:mix-blend-difference text-[1.4em] md:text-[1.8em] lg:text-[2em] text-right absolute w-auto top-[65%] sm:top-[60%] lg:top-[19%] right-[6%] pl-6'>Track Your Favorite Football<br />Players and Teams in Real-Time.</p>
                <div
                className='relative w-full flex justify-center items-center top-[20%] sm:top-[15%] md:top-[0%]'>
                    <img 
                    src={bg ? home2 : home1 } 
                    className='overflow-hidden w-full bg-cover bg-center z-[-5] absolute top-[30%] sm:top-[15%] md:top-[0%]'
                    />
                </div>
                <LoginSignup isLogin={isLogin} setIsLogin={setIsLogin}  />
            </div>
            <div className='relative w-full h-screen'>
                <p data-aos="fade-left" className='w-[75%] sm:w-[55%] lg:w-[40%] roboto-regular tracking-tighter text-black text-[1.1em] lg:text-[1.3em] absolute top-[75%] sm:top-[70%] right-[10%] lg:top-[20%] lg:right-[50%] pl-6'>At Kick Metrics, we are your ultimate source for your latest insight on football related content. Whether you’re a passionate fan or have a curiosity of knowing player and club performances, we provide comprehensive and up-to-date stats on all your favorite players and teams.</p>
                <div className='absolute top-[130%] lg:top-[80%] w-full h-[158vh] sm:h-[142vh] bg-black'></div>
                <img data-aos="fade-up-right" src={sommer} className='w-[250px] lg:w-[30%] absolute md:left-[10%] top-[110%] sm:top-[110%] left-[12%] lg:top-[60%] lg:left-16'/>
            </div>
            <div className='relative w-full h-screen'>
                <Info  />
            </div>
            <div className='relative h-screen w-full'>
                <Slideshow />
                <Footer setIsLogin={setIsLogin}  />
            </div>
        </div>
    )
}

export default Main