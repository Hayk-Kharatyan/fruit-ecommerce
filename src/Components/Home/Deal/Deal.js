import React from 'react'
import "./Deal.css"
import Timer from '../Timer/Timer'
export default function Deal() {
    return (
        <div className='Deal'>
            <div className='container'>
                <div className='image-percent'>
                    <div className='box-price'>
                        <div className='price-box'>
                            <div className='inner-price'>
                                <span className='pricee'><strong>30%</strong><br /> off per kg</span>
                            </div>
                        </div>
                        <img width="100%" alt='strawberry and milk' src='./images/strawberrymilk.jpg'></img>
                    </div>
                    <div className='month'>
                        <h3><span>Deal</span> of the month</h3>
                        <h4>Hikan Strwaberry</h4>
                        <div className='text-month'>
                            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant
                        </div>
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    )
}
