import React from 'react'
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
import "./Since.css"
export default function Since() {
    useEffect(() => {
        new WOW.WOW({
          live: false 
        }).init();
      },[])
    return (
        <div className='Since'>
            <div className='container'>
                <div className='flex'>
                    <div className='row-since animate__fadeInLeft wow animate__animated' >
                        <div className='image-since'>
                            <img alt='abt' width="100%" height="100%" src='./images/abt.jpg'></img>
                        </div>
                    </div>
                    <div className='since-txt wow animate__animated animate__fadeInRight'>
                        <p className='title-txt'>Since Year 1999</p>
                        <h2>We are <span>Fruitkha</span></h2>
                        <p className='since-p'>Etiam vulputate ut augue vel sodales. In sollicitudin neque et <br /> massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget <br /> dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, <br /> interdum velit. Nam eu molestie lorem.</p>
                        <p className='since-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Sapiente facilis illo repellat veritatis minus, et labore minima <br /> mollitia qui ducimus.</p>
                        <button className='btn-since'>know more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
