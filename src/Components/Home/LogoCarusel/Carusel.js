import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import "./Carusel.css"
export default function Carusel() {
    let [slidesPerView,setSliedPerView] = useState(4)
    const widthSwiperHandler = (()=>{
        if(window.innerWidth <= 767){
            setSliedPerView(3)
          
        }
        if(window.innerWidth <= 600){
            setSliedPerView(1)
        }
        if(window.innerWidth >= 767){
            setSliedPerView(4)
        }
    })

    window.addEventListener("scroll",widthSwiperHandler)
    return (
        <div className='Carusel'>
            <div className='container'>
            <>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={slidesPerView}
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}

                    className="mySwiper">
                    <SwiperSlide>
                        <div className='carusel-div '>
                            <img alt='logo'  src='./images/1.png'></img>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carusel-div '>
                            <img alt='logo'  src='./images/2.png'></img>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carusel-div'>
                            <img  alt='logo' src='./images/3.png'></img>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carusel-div'>
                            <img alt='logo'  src='./images/4.png'></img>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='carusel-div'>
                            <img  alt='logo' src='./images/5.png'></img>
                        </div>


                    </SwiperSlide>

                </Swiper>
            </>
            </div>
        </div>
    )
}
