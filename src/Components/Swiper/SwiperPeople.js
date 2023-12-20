import React from 'react'
import "./SwiperPeople.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

export default function SwiperPeople() {
    return (
        <div className='Peoples'>
            <div className='container'>
                <>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}

                        className="mySwiper">
                        <SwiperSlide>
                            <div className='people'>
                                <div className='avatar'><img alt='avatar' src='./images/avatar1.png'></img></div>
                                <h3>Saira Hakim </h3>
                                <h4>Local shop owner</h4>
                                <p className='txt-center'>
                                    " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae  vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                                </p>
                                <div className='icon-quote-right'></div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='people'>
                                <div className='avatar'><img alt='avatar' src='./images/avatar2.png'></img></div>
                                <h3>David Niph</h3>
                                <h4>Local shop owner</h4>
                                <p className='txt-center'>
                                    " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae  vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                                </p>
                                <div className='icon-quote-right'></div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='people'>
                                <div className='avatar'><img alt='avatar' src='./images/avatar3.png'></img></div>
                                <h3>Jacob Sikim </h3>
                                <h4>Local shop owner</h4>
                                <p className='txt-center'>
                                    " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                                </p>
                                <div className='icon-quote-right'></div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}
